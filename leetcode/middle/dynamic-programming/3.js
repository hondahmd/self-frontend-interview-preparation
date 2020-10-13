// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/
// Coin Change

// 108 ms 44.3 MB 88%
var coinChange = function(coins, amount) {
    const map = Array(amount + 1).fill(Infinity);
    map[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                map[i] = Math.min(map[i], map[i - coins[j]] + 1);
            }
        }
    }
    
    return map[amount] === Infinity ? -1 : map[amount];
};

const coins = [1,2,5];
const amount = 11;

console.time('coinChange');
console.log(coinChange(coins, amount));
console.timeEnd('coinChange');
