// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/
// Rotate Image

// v1 68 ms 36.8 MB 80.72%
const rotate = (matrix) => {
    const edge = matrix[0].length - 1;

    const swapOneSet = (x, y) => {
        const first = matrix[x][y];
        const second = matrix[y][edge - x];
        const third = matrix[edge - x][edge - y];
        const fourth = matrix[edge - y][x];

        matrix[y][edge - x] = first;
        matrix[edge - x][edge - y] = second;
        matrix[edge - y][x] = third;
        matrix[x][y] = fourth;
    }

    for (let i = 0; i < edge / 2; i++) {
        for (let j = i; j < edge - i; j++) {
            swapOneSet(i, j);
        } 
    }
};

const matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

rotate(matrix);
console.log(matrix);