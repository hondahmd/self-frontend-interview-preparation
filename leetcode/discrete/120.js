const minimumTotal = (triangle) => {
  const dp = Array(triangle.length).fill(Infinity);
  dp[0] = triangle[0][0];

  triangle.slice(0, -1).forEach((layer, step) => {
    layer.forEach((node, index) => {
      dp[step + 1] = Math.min(dp[step + 1], dp[step] + triangle[step + 1][index], dp[step] + triangle[step + 1][index + 1]);
    });
  });

  return dp[dp.length - 1];
}

const triangle = [[-1],[2,3],[1,-1,-3]];
minimumTotal(triangle)
