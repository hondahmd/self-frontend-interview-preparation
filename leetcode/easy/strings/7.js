// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
// strStr

// 80 ms 37.1 MB 52.37%
var strStr = function(haystack, needle) {
    const compareNeedle = (hayPart) => {
        for (let i = 0; i < needle.length; i++) {
            if (hayPart[i] !== needle[i]) return false;
        }
        return true;
    }
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (compareNeedle(haystack.substr(i, needle.length))) return i;
    }
    
    return -1;
};

console.log(strStr('hello', 'll'));