var isMatch = function(s, p) {
  const dp = Array(p.length + 1).fill(Array(s.length + 1).fill(false));
  dp[0][0] = true;

  const fillNext = (i, j) => {
    if (i >= p.length || j >= s.length) return;
    if (p[i] === '*') {
      for (let m = j; m < s.length + 1; m++) {
        dp[i + 1][m] = true;
      }
    } else if (p[i] === '?' || p[i] === s[j]) {
      dp[i + 1][j + 1] = true;
    }
  }

  dp.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col) {
        fillNext(i, j);
      }
    });
  });

  return dp[p.length][s.length];
};

const s = 'adceb';
const p = '*a*b';
console.log(isMatch(s, p));
