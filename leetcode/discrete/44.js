var isMatch = function(s, p) {
  const genArr = () => Array(p.length + 1).fill(null)
  const dp = [];
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = genArr();
  }
  const newMatchOne = (si, pi) => {
    if (si === s.length && pi === p.length) {
      dp[si][pi] = true;
      return;
    }

    if (dp[si][pi] !== null) {
      return;
    }

    if (s[si] === p[pi] || (p[pi] === '?' && si < s.length)) {
      dp[si][pi] = true;
      newMatchOne(si + 1, pi + 1);
      return;
    }

    if (p[pi] === '*') {
      for (let i = si; i <= s.length; i++) {
        dp[i][pi] = true;
        newMatchOne(i, pi + 1);
      }
      return;
    }

    dp[si][pi] = false;
  };
  newMatchOne(0, 0);

  return !!dp[s.length][p.length];
};

const s = 'adceb';
const p = '?';
console.log(isMatch(s, p));
