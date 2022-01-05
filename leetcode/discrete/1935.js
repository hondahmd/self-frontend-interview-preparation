const canBeTypedWords = (text, brokenLetters) => {
  return text.split(' ').filter(word => !brokenLetters.split('').some(char => word.includes(char))).length;
};

const text = 'leet code';
const brokenLetters = 'e';
console.log(canBeTypedWords(text, brokenLetters))
