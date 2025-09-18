/**
 * @param {number[]} nums
 * @return {boolean}
 * [1,2,3,3] : false
 */
function hasDuplicate(nums: number[]): boolean {
    let checknum = new Set();
    for (let index = 0; index < nums.length; index++) {
        if (checknum.has(nums[index])) {
            return true;
        }
        checknum.add(nums[index]);
    }
    return false;
}
function containsDuplicate(nums: number[]): boolean {
    let checknum = new Set(nums);
    if (nums.length != checknum.size) {
        return true;
    }
    return false;
}
let value = hasDuplicate([1, 3, 2, 1]);
console.log(value);
