const fourSum = (nums, target) => {
  nums = nums.sort();
  const result = [];

  const oneStep = (left, right, current, target, targetN) => {
    if (targetN === 2) {
      let l = left;
      let r = right;
      while (l < r) {
        let cur = nums[l] + nums[r];
        if (cur === target) {
          result.push([...current, nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) {
            l++;
          }
          l++;
        } else if (cur < target) {
          l++;
        } else {
          r--;
        }
      }
    } else {
      for (let i = left; i < right + 1; i++) {
        if (i === left || (i > left && nums[i - 1] !== nums[i])) {
          oneStep(i + 1, right, [...current, nums[i]], target - nums[i], targetN - 1);
        }
      }
    }
  }

  oneStep(0, nums.length - 1, [], target, 4);

  return result;
}

const nums = [1,0,-1,0,-2,2];
const target = 0;

console.log(fourSum(nums, target));
