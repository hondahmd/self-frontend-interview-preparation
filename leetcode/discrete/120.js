const minimumTotal = (triangle) => {
  const dp = [...triangle[triangle.length - 1]];

  triangle.slice(0, -1).reverse().forEach((layer) => {
    layer.forEach((node, index) => {
      dp[index] = Math.min(dp[index], dp[index + 1]) + node;
    });
  });

  return dp[0];
}

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle));
