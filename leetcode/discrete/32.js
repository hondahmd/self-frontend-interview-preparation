/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
  if (s.length === 0 || s.length === 1) {
    return 0;
  }
  let max = 0;

  let temp = s;

  const stack = [];
  const indexStack = [];
  let results = [];
  let index = 0;
  while (temp) {
    if (temp[0] === ')' && stack.length > 0 && stack[stack.length - 1] === '(') {
      results.push(indexStack[stack.length - 1]);
      results.push(index);
      stack.pop();
      indexStack.pop();
      temp = temp.substring(1);
    } else {
      stack.push(temp[0]);
      indexStack.push(index);
      temp = temp.substring(1);
    }
    index++;
  }
  results = results.sort((a, b) => a - b);
  let current = 1;
  for (let i = 1; i < results.length; i++) {
    if (results[i] === results[i - 1] + 1) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }

  return max;
};

const input = ")(())))(())())";
console.log(longestValidParentheses(input));
