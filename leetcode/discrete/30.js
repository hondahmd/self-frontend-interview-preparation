var findSubstring = function (s, words) {
  if (s === words.join('')) {
    return [0];
  }

  const wordLength = words[0].length;

  const result = [];
  s.split('').forEach((char, index) => {
    let start = index;
    const copy = [...words];
    while (copy.length > 0) {
      const matched = copy.indexOf(s.substr(start, wordLength))
      if (matched !== -1) {
        start += wordLength;
        copy.splice(matched, 1);
      } else {
        break;
      }
    }
    if (copy.length === 0) {
      result.push(index);
    }
  });

  return result;
};
