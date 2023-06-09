import { describe, expect, it } from "vitest"
import { convertAsync } from "../convert"

describe('deck list tests', () => {
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

    it('converts from PTCGO', async () => {
        const input = `***** Pokémon Trading Card Game Deck List *****

##Pokémon - 23

* 2 Bidoof BRS 120
* 2 Bibarel PR-SW 188
* 4 Mareep CRE 47
* 2 Raikou V BRS 48
* 3 Flaaffy EVS 55
* 1 Galarian Meowth RCL 126
* 1 Manaphy BRS 41
* 1 Morpeko V-UNION PR-SW 215
* 1 Morpeko V-UNION PR-SW 216
* 1 Morpeko V-UNION PR-SW 217
* 1 Morpeko V-UNION PR-SW 218
* 1 Pikachu V-UNION PR-SW 139
* 1 Pikachu V-UNION PR-SW 140
* 1 Pikachu V-UNION PR-SW 141
* 1 Pikachu V-UNION PR-SW 142

##Trainer Cards - 28

* 2 Evolution Incense SSH 163
* 3 Boss's Orders RCL 154
* 1 Big Charm SSH 158
* 4 Quick Ball FST 237
* 2 Air Balloon SSH 156
* 4 Ultra Ball BRS 150
* 2 Choice Belt BRS 135
* 4 Adventurer's Discovery FST 224
* 4 Professor's Research CEL 23
* 2 Switch SSH 183

##Energy - 9

* 4 Speed Lightning Energy RCL 173
* 5 Lightning Energy SWSHEnergy 4

Total Cards - 60

***** Deck List Generated by the Pokémon TCG Online www.pokemon.com/TCGO *****`

        const output = `2 Bidoof [SWSH09]
2 Bibarel - SWSH188 [SWSD]
4 Mareep [SWSH06]
2 Raikou V [SWSH09]
3 Flaaffy [SWSH07]
1 Galarian Meowth [SWSH02]
1 Manaphy [SWSH09]
1 Morpeko V-Union - SWSH215 [SWSD]
1 Morpeko V-Union - SWSH216 [SWSD]
1 Morpeko V-Union - SWSH217 [SWSD]
1 Morpeko V-Union - SWSH218 [SWSD]
1 Pikachu V-Union - SWSH139 [SWSD]
1 Pikachu V-Union - SWSH140 [SWSD]
1 Pikachu V-Union - SWSH141 [SWSD]
1 Pikachu V-Union - SWSH142 [SWSD]
2 Evolution Incense [SWSH01]
3 Boss's Orders [SWSH02]
1 Big Charm [SWSH01]
4 Quick Ball [SWSH08]
2 Air Balloon [SWSH01]
4 Ultra Ball [SWSH09]
2 Choice Belt [SWSH09]
4 Adventurer's Discovery [SWSH08]
4 Professor's Research [CLB]
2 Switch [SWSH01]
4 Speed L Energy [SWSH02]
`

        expect(await convertAsync(input)).toBe(output);
    });
});