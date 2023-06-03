import { describe, expect, it } from "vitest"
import { convertAsync } from "../convert"

describe('convert tests', () => {
    it("converts Magnezone ex deck", async () => {
        const input = `Pokémon: 6
4 Magnemite SVI 63 PH
4 Magnezone ex SVI 65
1 Skwovet SVI 151
4 Luxray CRZ 44 PH
1 Bidoof CRZ 111
2 Bibarel BRS 121

Trainer: 13
2 Avery CRE 130 PH
2 Escape Rope BST 125 PH
2 Cleansing Gloves BRS 136
4 Path to the Peak CRE 148 PH
3 Colress's Experiment CRZ-GG 59
2 Raihan CRZ-GG 65
2 Cheryl BST 159
4 Rare Candy SVI 191 PH
3 Boss's Orders PR-SW 251
4 Ultra Ball CRZ 146 PH
3 Nest Ball SVI 181 PH
1 Hisuian Heavy Ball ASR 146 PH
4 Judge SVI 176 PH`;
    
        const output = `4 Magnemite [SV01]
4 Magnezone ex - 065/198 [SV01]
1 Skwovet - 151/198 [SV01]
4 Luxray (44) [CRZ]
1 Bidoof [CRZ]
2 Bibarel [SWSH09]
2 Avery [SWSH06]
2 Escape Rope [SWSH05]
2 Cleansing Gloves [SWSH09]
4 Path to the Peak [SWSH06]
3 Colress's Experiment [CRZ:GG]
2 Raihan [CRZ:GG]
2 Cheryl (Full Art) [SWSH05]
4 Rare Candy - 191/198 [SV01]
3 Boss's Orders (Full Art) [SWSD]
4 Ultra Ball [CRZ]
3 Nest Ball - 181/198 [SV01]
1 Hisuian Heavy Ball [SWSH10]
4 Judge [SV01]`;

        expect(await convertAsync(input)).toBe(output);
    });    

    it("converts different art cards", async () => {
        const input = `1 Mew CEL 11
2 Surfing Pikachu VMAX CEL 9
1 Galarian Moltres PR-SW 284
1 Mew CRZ-GG 10
1 Hisuian Zoroark VSTAR PR-SW 298
1 Mew CEL 25
1 Mewtwo V-UNION PR-SW 159
1 Mewtwo V-UNION PR-SW 160
1 Mewtwo V-UNION PR-SW 161
1 Mewtwo V-UNION PR-SW 162
1 Mew VMAX FST 114
1 Mew VMAX FST 268
1 Mew VMAX FST 269
1 Mew VMAX LOR-TG 30
2 Mimikyu ex PR-SV 4
1 Sprigatito PR-SV 1`;

    const output = `1 Mew [CLB]
2 Surfing Pikachu VMAX [CLB]
1 Galarian Moltres - SWSH284 [SWSD]
1 Mew [CRZ:GG]
1 Hisuian Zoroark VSTAR - SWSH298 [SWSD]
1 Mew (Secret) [CLB]
1 Mewtwo V-UNION - SWSH159 [SWSD]
1 Mewtwo V-UNION - SWSH160 [SWSD]
1 Mewtwo V-UNION - SWSH161 [SWSD]
1 Mewtwo V-UNION - SWSH162 [SWSD]
1 Mew VMAX [SWSH08]
1 Mew VMAX (Secret) [SWSH08]
1 Mew VMAX (Alternate Art Secret) [SWSH08]
1 Mew VMAX (Secret) [SWSH11: TG]
2 Mimikyu ex [SV]
1 Sprigatito [SV]`;

    expect(await convertAsync(input)).toBe(output);
    });

    it("converts Hisuian Zoroark VSTAR CRZ deck", async () => {
        const input = `Pokémon: 8
1 Manaphy CRZ-GG 6
2 Gengar LOR-TG 6
3 Hisuian Zoroark VSTAR CRZ-GG 56
2 Shuppet SVI 87 PH
2 Klefki SVI 96 PH
4 Hisuian Zoroark V PR-SW 297
2 Banette ex SVI 88
1 Drapion V CRZ-GG 49

Trainer: 18
1 Klara PR-SW 302
4 Trekking Shoes CRZ 145 PH
1 Escape Rope BST 125 PH
2 Choice Belt BRS 135 PH
2 Switch SVI 194 PH
2 Path to the Peak CRE 148 PH
3 Fog Crystal CRE 140 PH
2 Boss's Orders PR-SW 251
3 Gapejaw Bog ASR 142 PH
1 Professor's Research CRZ 150
1 Professor's Research CEL 24
1 Professor's Research SVI 240
1 Cleansing Gloves BRS 136 PH
1 Hisuian Heavy Ball ASR 146 PH
4 Damage Pump LOR 156 PH
1 Pal Pad SVI 182 PH
4 Ultra Ball CRZ 146 PH
2 Serena SIT 164 PH

Energy: 2
4 Double Turbo Energy BRS 151 PH

Total Cards: 60`;
    
        const output = `1 Manaphy [CRZ:GG]
2 Gengar [SWSH11: TG]
3 Hisuian Zoroark VSTAR [CRZ:GG]
2 Shuppet [SV01]
2 Klefki [SV01]
4 Hisuian Zoroark V - SWSH297 [SWSD]
2 Banette ex - 088/198 [SV01]
1 Drapion V [CRZ:GG]
1 Klara (Full Art) [SWSD]
4 Trekking Shoes [CRZ]
1 Escape Rope [SWSH05]
2 Choice Belt [SWSH09]
2 Switch [SV01]
2 Path to the Peak [SWSH06]
3 Fog Crystal [SWSH06]
2 Boss's Orders (Full Art) [SWSD]
3 Gapejaw Bog [SWSH10]
1 Professor's Research (Full Art) [CRZ]
1 Professor's Research (Full Art) [CLB]
1 Professor's Research - 240/198 [SV01]
1 Cleansing Gloves [SWSH09]
1 Hisuian Heavy Ball [SWSH10]
4 Damage Pump [SWSH11]
1 Pal Pad [SV01]
4 Ultra Ball [CRZ]
2 Serena [SWSH12]
4 Double Turbo Energy [SWSH09]`;

        expect(await convertAsync(input)).toBe(output);
    });   
});

