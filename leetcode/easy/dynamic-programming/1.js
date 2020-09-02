// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/
// Climbing Stairs

var climbStairs = function(n) {
    let result = 0;
    
    const oneStep = (current) => {
        if (current > n) return;
        if (current === n) {
            result++;
            return;
        }
        
        oneStep(current + 1);
        oneStep(current + 2);
    }
    
    oneStep(0);
    return result;
};

console.log(climbStairs(44));