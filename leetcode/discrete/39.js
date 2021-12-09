var combinationSum = function(candidates, target) {
  const result = [];

  const sum = (arr) => arr.reduce((acc, cur) => acc += cur, 0);
  const oneLayer = (current) => {
    if (sum(current) === target) {
      const toPush = current.sort((a, b) => a - b).join('');
      if (!result.includes(toPush)) {
        result.push(toPush);
      }
      return;
    }
    if (sum(current) > target) {
      return;
    }
    candidates.forEach(item => {
      oneLayer([...current, item]);
    });
  };
  oneLayer([]);

  return result.map(item => item.split('').map(Number));
};

const candidates = [3,5,8];
const target = 11;
console.log(combinationSum(candidates, target));
