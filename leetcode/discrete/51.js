var solveNQueens = function (n) {
    const result = [];

    const checkAvailable = (col, board) => {
        let result = true;
        const row = board.length;
        board.forEach((line, index) => {
            const queenPosition = line.search('Q');
            const offset = row - index;
            if (queenPosition === col || queenPosition === col + offset || queenPosition === col - offset) {
                result = false;
            }
        })
        return result;
    }

    const insertOne = (board) => {
        if (board.length === n) {
            result.push(board);
            return;
        }
        
        Array(n).fill().forEach((_, index) => {
            if (checkAvailable(index, board)) {
                const newLine = Array(n).fill('.');
                newLine[index] = 'Q';
                const newBoard = [...board, newLine.join('')];
                insertOne(newBoard);
            }
        })
    }

    insertOne([]);

    return result;
};

console.log(solveNQueens(4));
