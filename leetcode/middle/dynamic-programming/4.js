// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/
// Longest Increasing Subsequence

// 100 ms 38.8 MB 41%
var lengthOfLIS = function(nums) {
    const map = Array(nums.length).fill(1);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < map.length; j++) {
            if (nums[j] > nums[i]) {
                map[i] = Math.max(map[i], map[j] + 1);
                console.log(map);
            }
        }
    }
    
    return Math.max(...map);
};

const nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));