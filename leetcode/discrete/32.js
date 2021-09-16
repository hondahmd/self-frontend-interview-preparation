/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  const results = [];

  const findOne = (index) => {
      let head = index;
      let tail = index + 1;
      while(head >= 0 && tail <= s.length - 1) {
          if (s[head] === '(' && s[tail] === ')') {
              head--;
              tail++;
          } else {
              break;
          }
      }
      results.push({ head: head + 1, tail: tail - 1, leng: tail - head - 1 });
  }

  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === '(' && s[i + 1] === ')') {
          findOne(i);
      }
  }

  if (results.length === 0) {
      return 0;
  }

  let max = results[0].leng;
  let acc = results[0].leng;
  for (let i = 0; i < results.length; i++) {
      if (i > 0) {
          if (results[i - 1].tail === results[i].head - 1) {
              acc += results[i].leng;
              max = Math.max(max, acc);
          } else {
              max = Math.max(max, acc);
              acc = 0;
          }
      }
  }

  return max;
};
