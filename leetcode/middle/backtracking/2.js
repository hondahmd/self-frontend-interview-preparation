// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/794/
// Generate Parentheses

// 88 ms 38.7 MB 37.81%
var generateParenthesis = function(n) {
    if (n === 0) return [];
    
    const addOneAtIndex = (current, index) => {
        const firstPart = current.substring(0, index);
        const secondPart = current.substring(index);
        return `${firstPart}()${secondPart}`;
    }
    
    const result = new Set();
    const addOne = (current) => {
        if (result.has(current)) return;
        result.add(current);
        if (current.length === n * 2) return;
        
        for (let i = 0; i <= current.length / 2; i++) {
            addOne(addOneAtIndex(current, i));
        }
    }
    
    addOne('');
    
    return Array.from(result).filter((str) => str.length === n * 2);
};

generateParenthesis(3);