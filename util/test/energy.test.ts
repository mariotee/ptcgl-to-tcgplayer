import { describe, expect, it } from "vitest"
import { convertAsync } from "../convert"

describe('ignores basic energy tests', () => {
    it('one line', async () => {
        const input = '1 Basic {L} Energy Energy 4';
        const output = '';

        expect(await convertAsync(input)).toBe(output);
    })

    it ('multiple lines', async () => {
        const input = `Pokémon: 0

Trainer: 0

Energy: 22
1 Wash {W} Energy VIV 165
1 Basic {L} Energy Energy 4
1 Basic {L} Energy SVE 4
1 Basic {L} Energy EVO 94
1 Basic {L} Energy Energy 30 PH
1 Basic {L} Energy EVO 94 PH
1 Basic {L} Energy BWALT 15
1 Basic {L} Energy BWALT 16
1 Basic {L} Energy GRI 168
1 Basic {L} Energy EVS 235
1 Horror {P} Energy RCL 172
1 Basic {L} Energy SVI 257
1 Basic {R} Energy GEN 76 PH
1 Basic {P} Energy CRE 232
1 Basic {P} Energy SUM 162
1 Basic {P} Energy BLW 109
1 Basic {P} Energy SVE 5
1 Basic {P} Energy Energy 40 PH
1 Basic {P} Energy ecalt 5

Total Cards: 22
`;
        const output = `1 Wash Water Energy [SWSH04]
1 Horror P Energy [SWSH02]`;

        expect(await convertAsync(input)).toBe(output);
    })
});