const search = (nums, target) => {
  let result = -1;

  const oneLayer = (start, end) => {
    if (result !== -1) {
      return;
    }
    if (nums[start] === target) {
      result = start;
      return;
    }
    if (nums[end] === target) {
      result = end;
      return;
    }
    if (start >= end) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      result = mid;
      return;
    }
    if (nums[start] < nums[end]) {
      if (nums[mid] > target) {
        oneLayer(start, mid - 1);
      } else if (nums[mid] < target) {
        oneLayer(mid + 1, end);
      }
    } else {
      if (target > nums[start]) {
        if (nums[mid] > nums[start] && target > nums[mid]) {
          oneLayer(mid + 1, end - 1);
        } else {
          oneLayer(start + 1, mid - 1);
        }
      } else if (target < nums[end]) {
        if (nums[mid] < nums[end] && target < nums[mid]) {
          oneLayer(start + 1, mid - 1);
        } else {
          oneLayer(mid + 1, end - 1);
        }
      }
    }
  };
  oneLayer(0, nums.length - 1);

  return result;
};

const nums = [4,5,6,7,8,0,1,2];
target = 8;

console.log(search(nums, target));
