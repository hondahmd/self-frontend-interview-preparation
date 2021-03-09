const removeElement = (nums, val) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count++;
      continue;
    }
    nums[i - count] = nums[i];
  }
  return nums.length - count;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

console.log(removeElement(nums, val), nums);
