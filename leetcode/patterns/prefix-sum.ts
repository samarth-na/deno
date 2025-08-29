type int = number;
function prerpocessing(nums: int[]): int[] {
    let sumarray = [0];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        count += element;
        sumarray[i] = count;
    }
    return sumarray;
}
let ans = prerpocessing([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(ans);
