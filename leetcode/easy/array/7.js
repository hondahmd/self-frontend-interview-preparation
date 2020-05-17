// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// v1 52ms 33.9mb 83.2%
var plusOne = function(digits) {
    const result = [...digits];
    const length = digits.length;
    
    for (let i = length - 1; i >= 0; i--) {
        if (result[i] === 9) {
            result[i] = 0;
        } else {
            result[i]++;
            return result;
        } 
    }
    
    result.unshift(1);
    
    return result;
};

const digits = [4,3,2,1];
console.log(plusOne(digits));