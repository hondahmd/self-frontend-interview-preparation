// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/792/
// Number of Islands

// 84 ms 39.1 MB 68.05%
var numIslands = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;
    const map = Array(grid.length).fill();
    map.forEach((_, index) => map[index] = Array(grid[0].length))
    
    const findEdge = (x, y) => {
        if (
            x >= grid.length
            || y >= grid[0].length
            || x < 0
            || y < 0
            || map[x][y] !== undefined
        ) return;
        map[x][y] = grid[x][y];
        if (grid[x][y] === '0') return;
        else {
            findEdge(x + 1, y);
            findEdge(x, y + 1);
            findEdge(x - 1, y);
            findEdge(x, y - 1);
        }
    }
    
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (map[i][j] === undefined) {
                result += +grid[i][j];
                findEdge(i, j);
            }
        }
    }
    
    return result;
};

const arr = [["1","1","1"],["0","1","0"],["1","1","1"]]
console.log(numIslands(arr));