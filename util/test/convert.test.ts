import { describe, expect, it } from "vitest"
import { convertAsync } from "../convert"

describe('simple convert tests', () => {
    it("converts different art cards", async () => {
        const input = `1 Mew CEL 11
2 Surfing Pikachu VMAX CEL 9
1 Galarian Moltres PR-SW 284
1 Mew CRZ-GG 10
1 Hisuian Zoroark VSTAR PR-SW 298
1 Mew CEL 25
1 Mewtwo V-UNION PR-SW 159
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
1 Mew VMAX [SWSH08]
1 Mew VMAX (Secret) [SWSH08]
1 Mew VMAX (Alternate Art Secret) [SWSH08]
1 Mew VMAX (Secret) [SWSH11: TG]
2 Mimikyu ex [SV]
1 Sprigatito [SV]`;

    expect(await convertAsync(input)).toBe(output);
    });
});