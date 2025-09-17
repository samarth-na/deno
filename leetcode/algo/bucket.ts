import { log } from "node:console";

function bucket(nums: number[]): number[] {
    let buckets: number[][] = Array.from({ length: 11 }, () => []);

    for (const num of nums) {
        buckets[num].push(num);
    }

    let out: number[] = [];
    for (const bucket of buckets) {
        out.push(...bucket);
    }

    return out;
}

function genarray() {
    let nums: number[] = [];
    for (let i = 0; i < 10; i++) {
        for (let i = 0; i < 1_000_000; i++) {
            nums[i] = Math.floor(Math.random() * 2_147_483_647); // random 32-bit signed int
        }
    }
    return nums;
}
bucket(genarray());
