// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// v1 56ms 34.4mb 80.93%
var twoSum = function(nums, target) {
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !==undefined) return [i, map[target - nums[i]]];
        else map[nums[i]] = i;
    }
};

const nums = [2,7,11,15];
console.log(twoSum(nums, 9));