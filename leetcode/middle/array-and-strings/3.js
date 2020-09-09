// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/
// Group Anagrams

// 128 ms 46.4 MB 81.18%
var groupAnagrams = function(strs) {
    const sortedStrs = strs.map((str) => str.split('').sort().join(''))
    const map = {};
    sortedStrs.forEach((str, index) => {
        if (map[str]) map[str].push(strs[index]);
        else map[str] = [strs[index]];
    })
    return Object.keys(map).map((key) => map[key]);
};

// 104 ms 47 MB 99.85%
var groupAnagrams = function(strs) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
    const sortedStrs = strs.map((str) => str.split('').reduce((acc, cur) => acc *= primes[cur.charCodeAt(0) - 97], 1))
    const map = {};
    sortedStrs.forEach((str, index) => {
        if (map[str]) map[str].push(strs[index]);
        else map[str] = [strs[index]];
    })
    return Object.keys(map).map((key) => map[key]);
};