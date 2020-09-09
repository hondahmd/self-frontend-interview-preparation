// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
// Longest Substring Without Repeating Characters

// 104 ms 43.2 MB 86.07%
var lengthOfLongestSubstring = function(s) {
    let longest = 0;    
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        const current = s.substring(start, end).split('');
        const findIndex = current.findIndex((char) => char === s[end]);
        if (findIndex >= 0) {
            start += findIndex + 1;
        } else {
            longest = Math.max(longest, end - start + 1);
        }
    }
    return longest;
};