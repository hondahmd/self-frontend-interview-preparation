/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const bubbleSort = (start, end) => {
    for (let i = start; i <= end; i++) {
      for (let j = i; j <= end; j++) {
        if (nums[j] < nums[i]) {
          const temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
        }
      }
    }
  }

  const length = nums.length;
  let flag = -1;
  for (let i = length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      flag = i;
      for (let j = length - 1; j >= 0; j--) {
        if (nums[j] > nums[flag]) {
          const temp = nums[j];
          nums[j] = nums[flag];
          nums[flag] = temp;
          break;
        }
      }
      break;
    }
  }

  bubbleSort(flag + 1, length - 1);
};
