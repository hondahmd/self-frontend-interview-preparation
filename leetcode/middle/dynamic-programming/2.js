// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/808/
// Unique Paths

// 80 ms 40.1 MB 51%
var uniquePaths = function(m, n) {
    const map = Array(m + 1).fill().reduce((acc) => (
        [...acc, Array(n + 1).fill(0)]
    ), []);
    
    const oneStep = (x, y) => {
        if (map[x][y]) return map[x][y];
        if (x === m || y === n) {
            map[x][y] = 1;
            return 1;
        }
        
        const cur = oneStep(x + 1, y) + oneStep(x, y + 1);
        map[x][y] = cur;
        
        return cur;
    }
    
    return oneStep(1, 1);
};