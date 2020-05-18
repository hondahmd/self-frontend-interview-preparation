// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// v1.0 152ms 36.9mb 16.46%
// simplest way
var singleNumber = function(nums) {
    while(nums.length !== 1) {
        let flag = true;
        for (let i = 1; i < nums.length; i++) {
            if (nums[0] === nums[i]) {
                nums.splice(i, 1);
                nums.shift();
                flag = false;
                break;
            }
        }
        if (flag) return nums[0];
    }
    return nums[0];
};

// v2.0 56ms 35.6mb 83.72%
// use ^=. XOR satisfies associative laws.异或运算满足结合律
const singleNumber2 = (nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

const nums = [2, 2, 1];
console.log(singleNumber(nums));