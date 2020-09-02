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

var climbStairs = function(n) {
    const stepArr = Array(n + 1);
    stepArr[1] = 1;
    stepArr[2] = 2;
    
    const oneStep = (current) => {
        if (stepArr[current]) return stepArr[current];
        stepArr[current] = oneStep(current - 1) + oneStep(current - 2);
        return stepArr[current];
    }
    
    oneStep(n);
    return stepArr[n];
};

console.log(climbStairs(44));