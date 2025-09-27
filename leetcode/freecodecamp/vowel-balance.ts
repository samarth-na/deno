import { log } from "node:console";

function isBalanced(s: string) {
    let len = s.length;
    let half = len / 2;
    let first = s.slice(0, half);

    let second: string;
    if (len % 2 !== 0) {
        second = s.slice(half + 1, len + 1);
    } else {
        second = s.slice(half, len + 1);
    }

    console.log(first, second);

    return s;
}
isBalanced("qweaqwe");

isBalanced("qweaaqwe");
