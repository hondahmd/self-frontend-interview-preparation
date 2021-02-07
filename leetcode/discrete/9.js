const isPalindrome = (x) => {
  const stringnify = String(x);

  let start = 0;
  let end = stringnify.length - 1;
  while (start < end) {
    if (stringnify[start] !== stringnify[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

const x = -121;

console.log(isPalindrome(x));
