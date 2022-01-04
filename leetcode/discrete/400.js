const findNthDigit = (n) => {
  let cur = 0;
  let acc = 0;
  while (acc < n) {
    acc += 9 * (cur + 1) * Math.pow(10, cur);
    cur++;
  }
  const step = n - (acc - 9 * cur * Math.pow(10, cur - 1)) - 1;
  const gap = Math.floor(step / cur);
  const target = Math.pow(10, cur - 1) + gap;

  return Number(String(target)[(step) % cur]);
};

const n = 12;
console.log(findNthDigit(n))
