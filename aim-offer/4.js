const testCases = [
    {
        matrix: [
            [1, 2],
            [3, 4]
        ],
        target: 2,
    },
    {
        matrix: [
            [1, 2],
            [3, 4]
        ],
        target: 1,
    },
    {
        matrix: [
            [1, 2],
            [3, 4]
        ],
        target: 4,
    },
    {
        matrix: [
            [1, 2],
            [3, 4]
        ],
        target: 0,
    },
    {
        matrix: [
            [1, 2],
            [3, 4]
        ],
        target: 5,
    },
    {
        matrix: [
            [1, 2],
            [4, 5]
        ],
        target: 3,
    },
    {
        matrix: [],
        target: 1
    }
]

const findInMatrix = (matrix, target) => {
    /** edge cases **/
    // empty matrix
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    // out of range
    if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
        return false;
    }

    let x = 0;
    let y = matrix[0].length - 1;
    while (true) {
        if (matrix[x][y] === target) {
            return true;
        } else if (matrix[x][y] > target) {
            y = y === 0 ? 0 : y - 1;
        } else {
            x = x === matrix.length - 1 ? matrix.length - 1 : x + 1;
        }
        if (x === matrix.length - 1 && y === 0) {
            return false;
        }
    }

    return false;
}

testCases.forEach((testCase) => {
    console.log(findInMatrix(testCase.matrix, testCase.target));
})
