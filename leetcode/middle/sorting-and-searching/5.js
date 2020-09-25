// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/
// Search for a Range

// 30%
var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) break;
        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (nums[mid] !== target) return [-1, -1];

    let edge = mid;
    const result = Array(2);
    while (nums[edge] === target) edge--;
    result[0] = edge + 1;
    edge = mid;
    while (nums[edge] === target) edge++;
    result[1] = edge - 1;
    return result;
};

var searchRange = function (nums, target) {
    const findFirstTarget = () => {
        let start = 0;
        let end = nums.length - 1;
        let mid;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                if (nums[mid - 1] !== target) return mid;
                if (nums[start] === target) return start;
                end = mid - 1;
            } else {
                if (nums[mid] > target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
    }
    const findSecondTarget = () => {
        let start = 0;
        let end = nums.length - 1;
        let mid;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                if (nums[mid + 1] !== target) return mid;
                if (nums[end] === target) return end;
                start = start + 1;
            } else {
                if (nums[mid] > target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
    }

    console.log(findFirstTarget(), findSecondTarget());
}

const nums = [1, 2, 3, 3, 3, 3, 4, 5, 9];
searchRange(nums, 3);