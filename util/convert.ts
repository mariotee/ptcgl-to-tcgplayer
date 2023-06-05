import puppeteer, { Browser, Page } from "puppeteer";
import { AnyNode, Cheerio, CheerioAPI, load } from "cheerio";
import { SetCodes, SetCodesSearch } from "./sets";

const PokemonCardLinePattern = /\d{1,2} [\w' {}-]+ [A-z-]+ \d{1,3}( PH)?$/;
const BasicEnergyPattern = /\d{1,2} Basic.+Energy.+( PH)?$/;

export async function convertAsync(input: string) {
    const lines = input.split('\n');
    const output: { index: number, data: string }[] = [];

    const puppet = await puppeteer.launch({
        headless: 'new',
        args: puppetArgs,
        executablePath: process.env.NODE_ENV === 'production'
            ? '/usr/bin/google-chrome'
            : undefined
    });

    await searchAndPopulateAsync(lines, puppet, output);

    puppet.close();

    return output
        .sort((a,b) => a.index < b.index ? -1 : 1)
        .map((e) => e.data)
        .join('\n');
}

function searchAndPopulateAsync(lines: string[], puppet: Browser, output: { index: number, data: string }[]): Promise<void[]> {
    return Promise.all(lines.map(async (line, index) => {
        let workingCopy = line.replace('* ','');

        if (line.match(BasicEnergyPattern)) {
            return;
        }

        if (line.match(PokemonCardLinePattern)) {
            if (line.endsWith("PH")) {
                workingCopy = workingCopy.substring(0, workingCopy.length - 3);
            }

            const parts = workingCopy.split(' ');
            const amount = parts[0] + " ";

            const card = parts.slice(1).join(' ');

            const page = await puppet.newPage();
            page.setDefaultNavigationTimeout(0);

            output.push({
                index,
                data: amount + await getLineAsync(card, page)
            });
        }
    }));
}

async function getLineAsync(card: string, page: Page) {
    for (const set of Object.keys(SetCodes)) {
        if (card.includes(set)) {
            const searchCard = card
                .replace(/\d+/, "")
                .replace(set, `${SetCodesSearch[set]}`)
                .trimEnd();

            const cardNumber = card.replace(/\D+/, '');

            const search = `https://tcgplayer.com/search/all/product?q=${searchCard}&view=grid`;

            await page.goto(search);
            await page.waitForSelector('.search-results')

            const $ = load(await page.content());

            return `${parseNodes($, cardNumber)} [${SetCodes[set]}]`;
        }
    }

    return `ERROR! No card found for: ${card}`;
}

function parseNodes($: CheerioAPI, cardNumber: string) {
    const withSlash = `.search-result__rarity span:contains(${cardNumber}/)`;

    const nodesWithSlash = $(withSlash);

    if (nodesWithSlash.length) {
        return getProductText(nodesWithSlash);
    } else {
        return getProductText($(withSlash.replace('/','')));
    }
}

function getProductText(node: Cheerio<AnyNode>) {
    return node
        .parent()
        .parent()
        .children('.search-result__title')
        .first()
        .text();
}

const puppetArgs = [
    '--autoplay-policy=user-gesture-required',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-client-side-phishing-detection',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-domain-reliability',
    '--disable-extensions',
    '--disable-features=AudioServiceOutOfProcess',
    '--disable-hang-monitor',
    '--disable-ipc-flooding-protection',
    '--disable-notifications',
    '--disable-offer-store-unmasked-wallet-cards',
    '--disable-popup-blocking',
    '--disable-print-preview',
    '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-setuid-sandbox',
    '--disable-speech-api',
    '--disable-sync',
    '--hide-scrollbars',
    '--ignore-gpu-blacklist',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-default-browser-check',
    '--no-first-run',
    '--no-pings',
    '--no-sandbox',
    '--no-zygote',
    '--password-store=basic',
    '--use-gl=swiftshader',
    '--use-mock-keychain',
];