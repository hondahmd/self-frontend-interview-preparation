var combinationSum = function (candidates, target) {
  const sum = (arr) => arr.reduce((acc, cur) => acc += cur, 0);
  if (sum(candidates) === target) {
    return [candidates];
  }
  const result = {};

  candidates.sort((a, b) => a - b);
  const oneLayer = (current, index) => {
    const key = current.join('');
    if (sum(current) === target) {
      if (!result[key]) {
        result[key] = current;
      }
      return;
    }
    if (sum(current) > target) {
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      oneLayer([...current, candidates[i]], i + 1);
    }
  };
  oneLayer([], 0);

  return Object.values(result);
};

const candidates = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const target = 30;
console.log(combinationSum(candidates, target));
