// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/
// Maximum Subarray

// dp way
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
    }
    return Math.max(...nums);
};

// recursive way
var maxSubArray = function(nums) {
    let result = nums[0];
    const oneStep = (index) => {
        if (index === 0) return nums[0];
        
        const prev = oneStep(index - 1);
        const temp = (prev > 0 ? prev : 0) + nums[index];
        result = Math.max(result, temp);
                
        return temp;
    }
    
    oneStep(nums.length - 1);
    return result;
};

const nums = [-2,1];
console.log(maxSubArray(nums));
