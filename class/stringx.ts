// take string and count the numbe of x and y
// str = bz + cx + xdx + 3x = 4
// str = xy + 2xy + 3x = 7

function countXY(str: string): { x: number; y: number } {
    let yCount = 0;
    let xCount = 0;

    console.log(str[str.length]); // undefined

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            str = str.replace("x", "z");
        }
    }
    console.log(str);

    // for (let char of str) {
    //     if (char === "x") {
    //         xCount++;
    //     }
    //     if (char === "y") {
    //         yCount++;
    //     }
    // }

    return { x: xCount, y: yCount };
}

const str1 = "bz + cx + xdx +3 x = 4";
const str2 = "zy + 2xy + 3x = 7";

countXY(str1);
countXY(str2);
