// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/793/
// Letter Combinations of a Phone Number

// 72 ms 36.9 MB 79.84%
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const chars = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    
    const digitsArr = digits.split('');
    const result = [];
    const oneStep = (index, current) => {
        if (index >= digitsArr.length) {
            result.push(current);
            return;
        }
        
        chars[digitsArr[index]].forEach((char) => {
            oneStep(index + 1, current + char)
        })
    }
    
    oneStep(0, '');
    return result;
};
