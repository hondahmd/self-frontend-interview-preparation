// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/796/
// Subsets

// really ineffective
var subsets = function (nums) {
    const resultStr = new Set();
    const result = [[]];
    const pickN = (current, left, n) => {
        if (current.length === n) {
            const currentStr = current.sort((prev, current) => prev - current).join('');
            if (resultStr.has(currentStr)) return;
            result.push(current);
            resultStr.add(currentStr);
            return;
        }

        for (let i = 0; i < left.length; i++) {
            pickN([...current, left[i]], [...left.slice(0, i), ...left.slice(i + 1)], n);
        }
    }

    const addN = (n) => {
        for (let i = 0; i < nums.length - n + 1; i++) {
            pickN([nums[i]], nums.slice(i + 1), n);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        addN(i);
    }

    return result;
};

var subsets = function (nums) {
    function generate(arr, idx) {
        res.push(arr);
        for (let i = idx; i < nums.length; i++) {
            generate([...arr, nums[i]], i + 1);
        }
    }

    let res = [];
    generate([], 0);
    return res;
};