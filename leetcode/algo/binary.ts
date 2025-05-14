type int = number;

function binary(nums: int[], target: int, low: int, high: int) {
    if (low > high) {
        return -1;
    }
    const middle = Math.floor(low + (high - low) / 2);

    if (nums[middle] === target) {
        return middle;
    } else if (target <= nums[middle]) {
        return binary(nums, target, low, middle);
    } else if (target >= nums[middle]) {
        return binary(nums, target, middle, high);
    }
    return -1;
}

function search(arr: int[], target: int) {
    binary(arr, target, 0, arr.length - 1);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ans = search(nums, 12);

console.log(ans);
