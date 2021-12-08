var solveSudoku = function(board) {
  const borderLength = 9;

  const enumerate = (board, row, col) => {
      const result = [];
      for (let i = 0; i < borderLength; i++) {
          if (board[row][i] !== '.') {
              result.push(board[row][i]);
          }
          if (board[i][col] !== '.') {
              result.push(board[i][col]);
          }
      }
      const blockRow = Math.floor(row / 3);
      const blockCol = Math.floor(col / 3);
      for (let i = blockRow * 3; i < (blockRow + 1) * 3; i++) {
          for (let j = blockCol * 3; j < (blockCol + 1) * 3; j++) {
              if (board[i][j] !== '.') {
                  result.push(board[i][j]);
              }
          }
      }
      const notInclude = Array.from(new Set(result));
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9'].filter(item => !notInclude.includes(item));
  };

  const findNextPoint = (board) => {
      for (let i = 0; i < borderLength; i++) {
          for (let j = 0; j < borderLength; j++) {
              if (board[i][j] === '.') {
                  return { row: i, col: j };
              }
          }
      }
  };

  let finish = false;
  const insertOne = () => {
      if (finish) {
          return;
      }
      const currentPoint = findNextPoint(board);
      if (!currentPoint) {
          finish = true;
          return;
      }
      const allSteps = enumerate(board, currentPoint.row, currentPoint.col);
      allSteps.forEach(step => {
          if (finish) {
            return;
          }
          board[currentPoint.row][currentPoint.col] = step;
          insertOne(board);
      });
      if (finish) {
        return;
      }
      board[currentPoint.row][currentPoint.col] = '.';
  };

  insertOne()
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
// const board = [['1','.', '.'],['2','.', '.'],['3','.', '.']];
solveSudoku(board)
console.log(board);
