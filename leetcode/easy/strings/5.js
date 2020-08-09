// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/ 
// Valid Palindrome

var isPalindrome = function(s) {
    if (s === '') return true;
    
    const preModify = (s) => {
        let result = '';
        for (let i = 0; i < s.length; i++) {
            const numeric = s[i] >= '0' && s[i] <= '9';
            const lower = s[i] >= 'a' && s[i] <= 'z';
            const upper = s[i] >= 'A' && s[i] <= 'Z';
            if (numeric || lower || upper) result += s[i];
        }
        return result;
    }
    
    const pure = preModify(s).toLowerCase();
    console.log(pure);
    for (let i = 0; i < pure.length / 2; i++) {
        if (pure[i] !== pure[pure.length - 1 - i]) return false;
    }
    return true;
};

const s = 'A man, a plan, a canal: Panama';

console.log(isPalindrome(s));