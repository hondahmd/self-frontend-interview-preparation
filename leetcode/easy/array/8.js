// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// v1 60ms 36mb 84.15%
var moveZeroes = function(nums) {
    let currentIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[currentIndex] === 0) {
            nums.splice(currentIndex, 1);
            nums.push(0);
        } else {
            currentIndex++;
        }
    }
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);