function gen10mil(): number[] {
    let arr: number[] = [];
    for (let i = 0; i < 10000000; i++) {
        arr.push(Math.floor(Math.random() * 2000000000));
    }
    return arr;
}

function quick(nums: number[]): number[] {
    let low: number[] = [];
    let mid: number[] = [];
    let high: number[] = [];

    if (nums.length <= 1) return nums;
    let point = nums[0];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > point) {
            high.push(num);
        } else if (num < point) {
            low.push(num);
        } else mid.push(num);
    }
    let total = [...quick(low), ...mid, ...quick(high)];
    return total;
}

// function check(nums: number[]) {
//     for (let i = 0; i < nums.length + 1; i++) {
//         if (nums[i] > nums[i + 1]) {
//             console.log("not right BUZZZZ");
//             return;
//         }
//     }
//     console.log("holky shit it worked");
// }

let ans = quick(gen10mil());
console.log(ans);
// check(ans);
