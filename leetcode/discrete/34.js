const searchRange = (nums, target) => {
  let head = nums[0] === target ? 0 : -1;
  let tail = nums[nums.length - 1] === target ? nums.length - 1 : -1;

  const oneLayer = (start, end) => {
    if (head !== -1 && tail !== -1) {
      return;
    }
    if (nums[start] < target && nums[start + 1] === target) {
      head = start + 1;
    }
    if (nums[end] > target && nums[end - 1] === target) {
      tail = end - 1;
    }
    if (start >= end - 1) {
      return;
    }

    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      oneLayer(start, mid);
    } else if (nums[mid] < target) {
      oneLayer(mid, end);
    } else {
      oneLayer(start, mid);
      oneLayer(mid, end);
    }
  }
  oneLayer(0, nums.length - 1);

  return [head, tail];
}

const nums = [1,2,3,3,3,3,4,5,9];
const target = 1;
console.log(searchRange(nums, target));
