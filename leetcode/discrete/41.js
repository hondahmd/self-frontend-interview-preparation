const trap = (height) => {
  let result = 0;

  const findTallest = (start, end) => {
    let result = 0;
    for (let i = start; i < end; i++) {
      if (height[i] > result) {
        result = height[i];
      }
    }
    return result;
  }
  const findWall = (index) => {
    const left = findTallest(0, index);
    const right = findTallest(index + 1, height.length);
    if (!!left && !!right && left > height[index] && right > height[index]) {
      return (Math.min(left, right) - height[index]);
    }
    return 0;
  };
  for (let i = 1; i < height.length - 1; i++) {
    result += findWall(i);
  }

  return result;
};

const height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
