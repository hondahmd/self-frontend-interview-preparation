var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] || obstacleGrid[0][0]) return 0;
  if (m === 1 || n === 1) return 1;
  const tmp = Array(m).fill('').map(() => Array(n).fill(0));
  let sideBlock = false;
  for (let i = n - 2; i >= 0; i--) {
      if (!obstacleGrid[m - 1][i] && !sideBlock) tmp[m - 1][i] = 1;
      else sideBlock = true;
  }
  sideBlock = false;
  for (let i = m - 2; i >= 0; i--) {
      if (!obstacleGrid[i][n - 1] && !sideBlock) tmp[i][n - 1] = 1;
      else sideBlock = true;
  }
  for (let i = m - 2; i >= 0; i--) {
      for (let j = n - 2; j >= 0; j--) {
          if (obstacleGrid[i][j]) continue;
          tmp[i][j] = tmp[i + 1][j] + tmp[i][j + 1];
      }
  }
  return tmp[0][0];
};

const obstacleGrid = [[0,0],[1,1],[0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid))
