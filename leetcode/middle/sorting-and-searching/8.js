// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/806/
// Search a 2D Matrix II

// 632 ms 12.95% dummy way
const searchMatrix = (matrix, target) => {
    const rows = matrix.length;
    if (rows === 0) return false;
    const cols = matrix[0].length;
    if (cols === 0) return false;
    
    const calcArr = Array(rows);
    for (let i = 0; i < rows; i++) {
        calcArr[i] = { start: 0, end: cols - 1 };
    }

    const searchOnce = (rowIndex) => {
        const currentRow = matrix[rowIndex];
        const { start, end } = calcArr[rowIndex];
        const mid = Math.floor((start + end) / 2);
        
        if (currentRow[mid] === target) return true;
        if (currentRow[mid] > target) {
            calcArr[rowIndex].end = mid - 1;
        } else {
            calcArr[rowIndex].start = mid + 1;
        }
    }

    let status = Array(rows).fill(false);
    while (status.filter((ele) => !ele).length > 0) {
        for (let i = 0; i < rows; i++) {
            if (status[i]) continue;
            if (calcArr[i].start > calcArr[i].end) {
                status[i] = true;;
                continue;
            }
            const result = searchOnce(i);
            if (result) return true;
        }
    }

    return false;
}

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 0;
console.log(searchMatrix(matrix, target));
