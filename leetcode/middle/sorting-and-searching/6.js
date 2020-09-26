// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/
// Merge Intervals

// 92 ms 41.3 MB 56%
var merge = function(intervals) {
    if (intervals.length === 0 || intervals.length === 1) return intervals;
    
    intervals.sort((prev, current) => prev[0] - current[0]);
    
    const result = [];
    let index = 1;
    let temp = intervals[0];
    while (index < intervals.length) {
       const current = intervals[index];
       if (current[0] <= temp[1]) {
           temp = [temp[0], Math.max(temp[1], current[1])];
       } else {
           result.push([...temp]);
           temp = current;
       }
       index++;
    }
    result.push(temp);
    return result;
};

const partition = (arr, start, end) => {
    const pivot = arr[Math.floor((start + end) / 2)];
    let head = start;
    let tail = end;
    while (true) {
        while (arr[head] < pivot) head++;
        while (arr[tail] > pivot) tail--;
        if (head >= tail) return tail;
        const temp = arr[head];
        arr[head] = arr[tail];
        arr[tail] = temp;
    }
}

const quickSort = (nums, start, end) => {
    if (start >= end) return;

    const mid = partition(nums, start, end);
    quickSort(nums, start, mid - 1);
    quickSort(nums, mid + 1, end);    
}

const nums = [9,8,7,6,5,10,11];
quickSort(nums, 0, nums.length - 1);
console.log(nums);
