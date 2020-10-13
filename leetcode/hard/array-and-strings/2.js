// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/828/
// Spiral Matrix

// This question is fxxking crazy
// 84 ms 38.4 MB 23%
var spiralOrder = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const calculateEdges = ({ leftX, leftY, rightX, rightY }) => {
        const newLeftX = leftX + 1;
        const newLeftY = leftY + 1;
        const newRightX = rightX - 1;
        const newRightY = rightY - 1;

        console.log(newLeftX, newLeftY, newRightX, newRightY);

        if (newLeftX > newRightX) return false;
        if (newLeftY > newRightY) return false;

        return {
            leftX: newLeftX,
            leftY: newLeftY,
            rightX: newRightX,
            rightY: newRightY,
        }
    }


    const result = [];
    let edges = { leftX: 0, leftY: 0, rightX: matrix.length - 1, rightY: matrix[0].length - 1 };
    while (true) {
        const { leftX, leftY, rightX, rightY } = edges;
        if (leftX === rightX && leftY === rightY) result.push(matrix[leftX][leftY]);
        for (let i = leftY; i < rightY; i++) {
            if (matrix[leftX][i] !== false) result.push(matrix[leftX][i]);
            matrix[leftX][i] = false;
        }
        for (let i = leftX; i < rightX; i++) {
            if (matrix[i][rightY] !== false) result.push(matrix[i][rightY]);
            matrix[i][rightY] = false;
        }
        for (let i = rightY; i > leftY; i--) {  
            if (matrix[rightX][i] !== false) result.push(matrix[rightX][i]);
            matrix[rightX][i] = false;
        }
        for (let i = rightX; i > leftX; i--) {
            if (matrix[i][leftY] !== false) result.push(matrix[i][leftY]);
            matrix[i][leftY] = false;
        }
        const calcResult = calculateEdges(edges);
        if (!calcResult) break;
        edges = calcResult;
    }

    return result;
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
console.log(spiralOrder(matrix));
