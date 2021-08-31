/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const length = nums.length;
    let flag = -1;
    for (let i = length - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            flag = i;
            break;
        }
    }

    for (let i = length - 1; i >=0; i--) {
        if (nums[i] > nums[flag]) {
            const temp = nums[i];
            nums[i] = nums[flag];
            nums[flag] = temp;
        }
    }

    const swapL = length - flag - 1;
    for (let i = 0; i < Math.floor(swapL / 2); i++) {
        const temp = nums[flag + 1 + i];
        nums[flag + 1 + i] = nums[length - 1 - i];
        nums[length - 1 - i] = temp;
    }
};
