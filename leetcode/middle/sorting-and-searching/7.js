// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/804/
// Search in Rotated Sorted Array

// 80 ms 38.9 MB 50%
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    
    while (start <= end) {
        console.log(start, end);
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            if (nums[end] < target && nums[end] >= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (nums[start] > target && nums[start] <= nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

const nums = [3,1];
const target = 1;
console.log(search(nums, target));
