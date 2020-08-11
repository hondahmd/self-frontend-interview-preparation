// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
// Longest Common Prefix

// 80 ms 37 MB 65.83%
var longestCommonPrefix = function(strs) {
    const compareOne = (index) => {
        for (let i = 0; i < strs.length - 1; i++) {
            if (index >= strs[i].length) return false;
            if (index >= strs[i + 1].length) return false;
            if (strs[i][index] !== strs[i + 1][index]) return false;
        }
        return true;
    }
    
    let result = "";
    const flagString = strs[0] || "";
    for (let i = 0; i < flagString.length; i++) {
        if (compareOne(i)) result += strs[0][i];
        else break;
    }
    
    return result;
};

const arr = ["flower","flow","flight"];

console.log(longestCommonPrefix(arr));