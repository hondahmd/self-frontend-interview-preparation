// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// v1.0 96ms 35.6MB 30.65%
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};

nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums);
