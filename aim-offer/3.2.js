const testCases = [
    [2,3,5,4,3,2,6,7],
    [1,2],
    [],
    null,
    [1],
]

// with extra O(n) space
const findDuplicate = (nums) => {
    if (!nums || nums.length === 0 || nums.length === 1) return -1;

    const temp = Array(nums.length - 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i] - 1]) {
            return nums[i];
        } else {
            temp[nums[i] - 1]++;
        }
    }
    return -1;
}

testCases.forEach((testCase) => {
    console.log(findDuplicate(testCase));
})

// with O(nlogn) time cost
const findDuplicateV2 = (nums) => {
    const goThrough = (start, end) => {
        let count = 0;
        nums.forEach((num) => {
            if (num >=start && num <= end) {
                count++;
            }
        })
        return count > (end - start + 1);
    }

    let start = 1;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (goThrough(mid, mid)) {
            return mid;
        }
        if (goThrough(start, mid)) {
            end = mid - 1;
            continue;
        }
        if (goThrough(mid, end)) {
            start = mid + 1;
            continue;
        }
    }
}

testCases.forEach((testCase) => {
    console.log(findDuplicate(testCase));
})
