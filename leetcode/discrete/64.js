const minPathSum = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  const cache = new Array(m).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  let result = Number.MAX_SAFE_INTEGER;
  const oneStep = (i, j, acc) => {
    if (i === m - 1 && j === n - 1) {
      return grid[i][j] + acc;
    }
    let res1 = Number.MAX_SAFE_INTEGER;
    let res2 = Number.MAX_SAFE_INTEGER;
    if (i !== m - 1) {
      res1 = oneStep(i + 1, j, acc + grid[i][j]);
    }
    if (j !== n - 1) {
      res2 = oneStep(i, j + 1, acc + grid[i][j]);
    }
    cache[i][j] = Math.min(res1 - acc, res2 - acc, cache[i][j]);
    return Math.min(res1, res2);
  }
  const res = oneStep(0, 0, 0);
  return res;
}

console.log(minPathSum([[1, 2], [5, 6], [1, 1]]))
