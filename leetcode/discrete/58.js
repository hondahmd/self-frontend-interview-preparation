var lengthOfLastWord = function (s) {
  let result = 0;
  let i = s.length - 1;
  while (s[i] === ' ') { i--; }
  while (s[i] !== ' ' && i >= 0) {
    i--;
    result++;
  }
  return result;
};

console.log(lengthOfLastWord('  fly   moon  '))
