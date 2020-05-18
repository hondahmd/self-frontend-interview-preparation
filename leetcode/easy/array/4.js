// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
'use strict';

// v1.0 80ms 55mb 38.65%
// Sort
const mergeSort = (nums) => {
    if (nums.length === 0 || nums.length === 1) return false;

    let newNums = [];
    let splitArrLength = nums.length;

    while(splitArrLength > 0.5) {
        for (let i = 0; i < splitArrLength; i = i + 2) {
            const subArrLength = Math.floor(nums.length / splitArrLength);
            const firstArr = nums.slice(i * subArrLength, (i + 1) * subArrLength);
            const secondArr = nums.slice((i + 1) * subArrLength, (i + 2) * subArrLength);
            let m = 0, n = 0;

            while (m < firstArr.length && n < secondArr.length) {
                if (firstArr[m] < secondArr[n]) newNums.push(firstArr[m++]);
                else if (firstArr[m] > secondArr[n]) newNums.push(secondArr[n++]);
                else return true;
            }
            while (m < firstArr.length) newNums.push(firstArr[m++]);
            while (n < secondArr.length) newNums.push(secondArr[n++]);
        }
        nums = newNums;
        newNums = [];
        splitArrLength /= 2;
    }
    return false;
};

const nums = [8, 7, 6, 5, 4, 3, 2, 1, 1];
// const nums = [1,5,-2,-4,0];
const newNums = mergeSort(nums);
console.log(newNums);
