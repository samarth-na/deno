function mergeAlternately(word1: string, word2: string) {
    let neww: string = "";
    let len: number;
    if (word1.length < word2.length) {
        len = word1.length;
    } else {
        len = word2.length;
    }
    console.log(len);

    for (let i = 0; i < len; i++) {
        neww += word1[i] + word2[i];
    }

    if (word2.length > word1.length) {
        let word3 = word2.slice(word1.length, word2.length);
        console.log(word3);
        neww += word3;
    }

    if (word2.length < word1.length) {
        let word3 = word1.slice(word2.length, word1.length);
        console.log(word3);
        neww += word3;
    }
    console.log(neww);

    return neww;
}
let ans = mergeAlternately("abce", "pqrer");
// console.log(ans);
