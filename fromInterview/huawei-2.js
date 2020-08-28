const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const longestMale = (matrix, rows, cols) => {
    let result = 0;

    const oneStep = (current, col, row, direction) => {
        console.log(row, col);
        if (current > result) result = current;
        if (col >= cols || row >= rows) return;
        if (direction === 1) {
            if (matrix[row][col] === 'M') {
                oneStep(current + 1, col + 1, row, 1);
            } else {
                return;
            }
        }
        if (direction === 2) {
            if (matrix[row][col] === 'M') {
                oneStep(current + 1, col, row + 1, 2);
            } else {
                return;
            }
        }
        if (direction === 3) {
            if (matrix[row][col] === 'M') {
                oneStep(current + 1, col + 1, row + 1, 3);
            } else {
                return;
            }
        }
        if (direction === 4) {
            if (matrix[row][col] === 'M') {
                oneStep(current + 1, col - 1, row + 1, 4);
            } else {
                return;
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            oneStep(0, col, row, 1);
            oneStep(0, col, row, 2);
            oneStep(0, col, row, 3);
            oneStep(0, col, row, 4);
        }
    }

    console.log(result);
}

let inputLines = 0;
let rows = 0;
let cols = 0;
const matrix = [];
rl.on('line', (line) => {
    if (inputLines === 0) {
        tokens = line.split(',');
        rows = Number(tokens[0]);
        cols = Number(tokens[1]);
        inputLines++;
    } else if (inputLines <= rows) {
        matrix.push(line.split(','));
        inputLines++;
    }

    if (inputLines === rows + 1) {
        longestMale(matrix, rows, cols);
    }
});