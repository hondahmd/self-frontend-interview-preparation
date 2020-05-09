// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// v1.0 64ms 35.4mb 43.65% 
// Strategy: Buy before rise, sell before drop
var maxProfit = function(prices) {
    let result = 0;
    let buyPoint = -1;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] === prices[i + 1]) continue;
        else if (prices[i] < prices[i + 1]) buyPoint = buyPoint < 0 ? prices[i] : buyPoint;
        else {
            if (buyPoint >= 0) {
                result += (prices[i] - buyPoint);
                buyPoint = -1;
            }
        }
    }
    if (buyPoint >= 0) {
        result += (prices[prices.length - 1] - buyPoint); 
    }
    return result;
};

prices = [2,1,2,1,0,1,2];
console.log(maxProfit(prices));