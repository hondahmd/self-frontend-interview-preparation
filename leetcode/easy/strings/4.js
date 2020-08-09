// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
// Valid Anagram

// v1.0
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) sMap[s[i]] = 1;
        else sMap[s[i]]++;
        if (!tMap[t[i]]) tMap[t[i]] = 1;
        else tMap[t[i]]++;
    }
    
    const sKeys = Object.keys(sMap);
    const tKeys = Object.keys(tMap);
    if (sKeys.length !== tKeys.length) return false;
    for (let i = 0; i < sKeys.length; i++) {
        if (sMap[sKeys[i]] !== tMap[sKeys[i]]) return false;
    }
    
    return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));