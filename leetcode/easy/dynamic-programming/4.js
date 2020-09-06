// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/
// House Robber

// 76 ms 37 MB 62%
var rob = function(nums) {
    const len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    if (len === 2) return Math.max(...nums);
    
    nums.push(0);
    nums.push(0);
    const temp = Array(len + 2);
    temp[0] = nums[0];
    temp[1] = nums[1];
    let max = 0;
    
    const oneStep = (index) => {
        if (temp[index] !== undefined) return temp[index];
        
        let result = 0;
        for (let i = index - 2; i >= 0; i--) {
            const calc = oneStep(i);
            if (calc > result) result = calc;
        }
        
        result += nums[index];
        if (result > max) max = result;
        temp[index] = result;
        return result;
    }
    
    oneStep(len + 1);
    return max;
};

const nums = Array(100).fill(0);
console.log(rob(nums));