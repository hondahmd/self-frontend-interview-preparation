// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/795/
// Permutations

// 88 ms 39.9 MB 82.58%
var permute = function(nums) {    
    const result = [];
    const oneStep = (current, left) => {
        if (current.length === nums.length) result.push(current);
        
        for (let i = 0; i < left.length; i++) {
            oneStep([...current, left[i]], left.filter((_, index) => index !== i));
        }
    }
    
    oneStep([], nums);
    return result;
};

const nums = [1, 2, 3];
console.log(permute(nums));
