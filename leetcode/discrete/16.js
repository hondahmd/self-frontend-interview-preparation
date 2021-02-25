const threeSumClosest = (nums, target) => {
  nums = nums.sort((a, b) => a - b);
  let resultSum = nums[0] + nums[1] + nums[nums.length - 1];
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const current = nums[i] + nums[left] + nums[right];
      const offset = Math.abs(current - target);
      console.log(current, offset);
      if (offset < Math.abs(resultSum - target)) {
        resultSum = current;
      }
      if (offset === 0) {
        return current;
      } else if (current - target < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return resultSum;
}

const nums = [1,2,4,8,16,32,64,128];
const target = 82;
console.log(threeSumClosest(nums, target));
