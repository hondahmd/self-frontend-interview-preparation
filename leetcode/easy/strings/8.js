// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
//   Count and Say

// 80 ms 39.2 MB 51.03%
var countAndSay = function(n) {
    let temp = '1';
    let result = '';
    
    const oneStep = (index) => {
        let count = 0;
        let start = index;
        while (temp[start] === temp[index]) {
            count++;
            start++;
        }
        result += `${count}${temp[index]}`;
        return count;
    }
    
    Array(n - 1).fill().forEach(() => {
        result = '';
        for (let i = 0; i < temp.length;) {
            i += oneStep(i);
        }
        console.log(result);
        temp = result;
    });
    
    return temp;
};

console.log(countAndSay(6));
