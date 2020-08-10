// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
// atoi

const cases = [
    '42',
    '          -42',
    '4193 with words',
    'words and 987',
    '-91283472332',
    '.1',
    '0-1',
    ' b11228552307',
    '+1',
];

// TODO: make it clean!
var myAtoi = function(str) {
    const isNumeric = (char) => char >= '0' && char <= '9';
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    let startIndex;
    let endIndex;
    const temp = str.trim();
    for (let i = 0; i < temp.length; i++) {
        if (startIndex !== undefined && endIndex !==undefined && !isNumeric(temp[i])) break;
        if (startIndex === undefined && isNumeric(temp[i])) startIndex = i;
        if (isNumeric(temp[i])) endIndex = i;
    }

    if (startIndex !== 0 && startIndex !== 1) return 0;

    let result = 0;
    const resultString = temp.substring(startIndex, endIndex + 1);
    if (startIndex !== undefined) result = Number(resultString);
    if (startIndex > 0) {
        if (temp[startIndex - 1] === '-') {
            result = -Number(resultString);
            if (result < INT_MIN) return INT_MIN;
            return result;
        } else if (temp[startIndex - 1] !== '+') {
            return 0;
        }
    }
    if (result > INT_MAX) result = INT_MAX;
    return result; 
};

cases.forEach((item) => {
    console.log(myAtoi(item));
});