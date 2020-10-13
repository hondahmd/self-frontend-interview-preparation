// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/827/
// Product of Array Except Self

// 104 ms 48.7 MB 49%
var productExceptSelf = function(nums) {
    let zeros = 0;
    const total = nums.reduce((acc, cur) => {
        if (cur === 0) {
            zeros++;
            return acc;
        } else {
            return acc * cur;
        }
    }, 1);
    
    const result = nums.map((num) => {
        if (num === 0) {
            if (zeros > 1) return 0;
            else return total;
        } else {
            if (zeros > 0) return 0;
            else return total / num;
        }
    })
    return result;
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));