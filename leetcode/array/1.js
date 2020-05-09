// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// v1.0
var removeDuplicates = function(nums) {
    const length = nums.length;
    let current;
    for (let i = 0; i < length; i++) {
        console.log(nums[0]);
        if (nums[0] !== current) {
            current = nums[0];
            nums.shift();
            nums.push(current);
        } else {
            nums.shift();
        }
    }
    return nums.length;
};

nums = [1, 1, 2];
console.log(removeDuplicates(nums), nums);