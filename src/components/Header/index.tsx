export default function Header() {
    return <div className="m-8">
        <h1 className="text-3xl my-4 mx-4">PTCGL to TCGPlayer Converter</h1>
        <p className="text-sm">
            This tool is for converting PTCGL deck lists to Mass Entry lists for TCGPLayer. Good for seeing roughly how much a deck would cost.
        </p>
        <p className="text-sm">
            Currently supported is (mostly) sets for the Standard format. This tool is still a work in progress. 
            So please report any issues to <a className="text-blue-500 underline" href="mailto:mariotorresdev@gmail.com">my dev email </a>
            or open a bug report on <a className="text-blue-500 underline" href="https://github.com/mariotee/ptcgl-to-tcgplayer/issues">GitHub</a>
        </p>
    </div>
}