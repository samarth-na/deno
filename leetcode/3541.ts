import { log } from "node:console";

function maxFreqSum(s: string): number {
    const map: { [key: string]: number } = {};

    for (const c of s) {
        map[c] = (map[c] || 0) + 1;
    }

    let vmax = 0;
    let cmax = 0;
    for (const [i, j] of Object.entries(map)) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            vmax += j;
        } else {
            cmax += j;
        }
    }
    log(vmax, cmax);
    return vmax + cmax;
}

maxFreqSum("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeuuuuuuiiiiaabbasd");
