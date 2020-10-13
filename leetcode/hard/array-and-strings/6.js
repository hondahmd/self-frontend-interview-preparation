// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/832/
// First Missing Positive

// 72 ms 38.8 MB 94%
var firstMissingPositive = function(nums) {
    let positiveNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) positiveNum++;
    }
    if (!positiveNum) return 1;
    const expected = Array(positiveNum).fill(false);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && nums[i] <= positiveNum) {
            expected[nums[i] - 1] = true;
        }
    }
    for (let i = 0; i < expected.length; i++) {
        if (!expected[i]) return i + 1;
    }
    return positiveNum + 1;
};

const nums = [2,4,0,1];
console.log(firstMissingPositive(nums));