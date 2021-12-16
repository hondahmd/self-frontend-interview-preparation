var isMatch = function(s, p) {
  const matchOne = (leftS, leftP) => {
    if (leftS.length === 0 && leftP.length === 0) {
      return true;
    }

    if (leftS[0] === leftP[0] || leftP[0] === '&') {
      return matchOne(leftS.substring(1), leftP.substring(1));
    }
    if (leftP[0] === '*') {
      const all = leftS.split('');
      all.push(' ');
      return all.some((_, index) => matchOne(leftS.substring(index), leftP.substring(1)))
    }

    return false;
  };

  return matchOne(s, p);
};

const s = 'aa';
const p = 'a&';
console.log(isMatch(s, p));
