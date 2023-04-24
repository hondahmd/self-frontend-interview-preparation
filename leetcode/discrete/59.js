var generateMatrix = function (n) {
  const result = Array(n).fill().map(() => Array(n).fill(''));
  const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let current = [0, 0];
  let currentMove = 0;
  for (let i = 0; i < n * n; i++) {
    if (current[0] < n && current[1] < n && result[current[0]][current[1]] === '') {
      result[current[0]][current[1]] = i + 1;
      current[0] += move[currentMove][0];
      current[1] += move[currentMove][1];
    } else {
      current[0] -= move[currentMove][0];
      current[1] -= move[currentMove][1];
      currentMove = (currentMove + 1) % 4;
      current[0] += move[currentMove][0];
      current[1] += move[currentMove][1];
      result[current[0]][current[1]] = i + 1;
      current[0] += move[currentMove][0];
      current[1] += move[currentMove][1];
    }
  }
  return result;
};

console.log(generateMatrix(3))
