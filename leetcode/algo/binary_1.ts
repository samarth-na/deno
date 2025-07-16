import type { num } from "../types.ts";
import binIterative from "./binary-iterative.ts";
// import { binRecursion } from "./binary-recurrsion";

function binary(arr: num[], target: num) {
    arr = arr.sort((a, b) => a - b);

    console.log("lets start");

    // let output = binRecursion(arr, target, 0, arr.length - 1);
    const output = binIterative(arr, target);

    console.log("output is", output);
    console.log(arr);
}
function main() {
    let arr = [6, 3, 7, 9, 23, 2, 33, 1, 36, 8, 0, 29, 17, 16, 4, 13];
    arr = arr.sort((a, b) => a - b);
    binary(arr, 6);
}
main();
