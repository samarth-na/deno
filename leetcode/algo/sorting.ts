export function bubblesort(arr: number[]): number[] {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
export function quick(nums: number[]): number[] {
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
