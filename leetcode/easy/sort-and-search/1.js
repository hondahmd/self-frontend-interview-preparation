

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/
// Merge Sorted Array

// 68 ms 37.3 MB 92.11%
var merge = function(nums1, m, nums2, n) {
    let pt1 = 0;
    let pt2 = 0;
    
    const result = [];
    while(pt1 < m && pt2 < n) {
        if (nums1[pt1] > nums2[pt2]) {
            result.push(nums2[pt2]);
            pt2++;
        } else {
            result.push(nums1[pt1]);
            pt1++;
        }
    }
    
    while (pt1 < m) {
        result.push(nums1[pt1]);
        pt1++;
    }
    while (pt2 < n) {
        result.push(nums2[pt2]);
        pt2++;
    }
    
    result.forEach((num, index) => nums1[index] = num)
};