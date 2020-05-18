// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// v1 96ms 37.1mb 9.21%
var intersect = function(nums1, nums2) {
    const map = {};
    
    for (let i of nums1) {
        map[i] ? map[i].first++ : map[i] = { first: 1 };
    }
    
    for (let i of nums2) {
        if (map[i]) {
            map[i].second ? map[i].second++ : map[i].second = 1;
        }
    }
    
    const result = [];
    Object.keys(map).forEach((key) => {
        if (map[key].first && map[key].second) {
            const amount = Math.min(map[key].first, map[key].second);
            for (let i = 0; i < amount; i++) result.push(key);
        }
    });
    
    return result;
};

// v2 64ms 36.5mb 44.17% 
var intersect = function(nums1, nums2) {
    const map1 = {};
    
    for (let i of nums1) {
        map1[i] ? map1[i]++ : map1[i] = 1;
    }
    
    const map2 = {};
    
    for (let i of nums2) {
        map2[i] ? map2[i]++ : map2[i] = 1;
    }
    
    const result = [];
    Object.keys(map1).forEach((key) => {
        if (map2[key]) {
            const amount = Math.min(map1[key], map2[key]);
            // The major difference with v1 is here.
            // Use Array constructor and fill() instead of a for loop.
            result.push(...Array(amount).fill(key));
        }
    });
    
    return result;
};

// ummmm... The truth is, I tried the rank 1st algorithm, and it shows that it only beats 8.5%!
// That maybe means for this question the solutions are not quite different

nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersect(nums1, nums2));