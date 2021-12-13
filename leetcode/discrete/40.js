var combinationSum = function (candidates, target) {
  const allSame = () => {
    const first = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
      if (first !== candidates[i]) {
        return false;
      }
    }
    return true;
  };
  if (allSame() && ((target % candidates[0]) === 0) && ((target / candidates[0]) <= candidates.length)) {
    return [Array(target / candidates[0]).fill(candidates[0])];
  }
  const result = {};

  candidates.sort((a, b) => a - b);
  const sum = (arr) => arr.reduce((acc, cur) => acc += cur, 0);
  const current = [];
  const oneLayer = (index) => {
    if (sum(current) + candidates[index] === target) {
      if (!result[current.join('') + candidates[index]]) {
        result[current.join('') + candidates[index]] = [...current, candidates[index]];
      }
      return;
    }
    if (sum(current) + candidates[index] > target) {
      return;
    }
    current.push(candidates[index]);
    for (let i = index; i < candidates.length; i++) {
      oneLayer(i + 1);
    }
    current.pop();
  };
  candidates.forEach((item, index) => {
    oneLayer(index);
  })

  return Object.values(result);
};

const candidates = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const target = 30;
// const candidates = [10, 1, 2, 7, 6, 1, 5];
// const target = 8;
console.log(combinationSum(candidates, target));
