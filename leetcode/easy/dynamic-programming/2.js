// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/
// Best Time to Buy and Sell Stock

// 312 ms 40.2 MB 14.2%
var maxProfit = function(prices) {
    const minArr = Array(prices.length);
    
    const findMin = (index) => {
        let min = prices[index];
        let minIndex = -1;
        for (let i = 0; i < index; i++) {
            if (prices[i] <= min) {
                minIndex = i;
                min = prices[minIndex];
            }
        }
        return minIndex;
    }
    
    const updateMinArr = (start, end, newMin) => {
        for (let i = start; i <= end; i++) {
            minArr[i] = newMin;
        }
    }
    
    for (let i = prices.length - 1; i > 0; i--) {
        if (minArr[i]) continue;
        else {
            const newMin = findMin(i);
            if (newMin >=0 ) {
                updateMinArr(newMin,  i, prices[newMin]);
            }
        }
    }
    
    let result = 0;
    for (let i = 1; i < minArr.length; i++) {
        if (minArr[i] === undefined || minArr[i] < 0) continue;
        if ((prices[i] - minArr[i]) > result) result = prices[i] - minArr[i];
    }
    
    console.log(minArr);
    
    return result;
};

//  72 ms 37.7 MB 93.97%
var maxProfit1 = function(prices) {
    let maxDiff = 0;
    let tmpMaxDiff = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        tmpMaxDiff += diff;
        if (tmpMaxDiff > maxDiff) maxDiff = tmpMaxDiff;
        if (tmpMaxDiff < 0) tmpMaxDiff = 0;
    }
    
    return maxDiff;
};