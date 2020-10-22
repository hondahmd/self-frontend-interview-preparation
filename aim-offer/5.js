const testCases = [
    ' 123',
    '123 ',
    '1 2 3',
    '1    23',
    '123',
    '',
    '1',
    '    ' 
];

const swapSpaces = (str) => {
    const origLen = str.length;
    if (origLen === 0 || origLen === 1) return str;
    let newLen = origLen;

    Array().forEach.call(str, (char) => {
        if (char === '') newLen++;
    })
    
    const result = Array(newLen);
    let newStrPtr = 0;
    for (let i = 0; i < origLen; i++) {
        if (str[i] !== ' ') {
            result[newStrPtr++] = str[i];
        } else {
            result[newStrPtr++] = '%';
            result[newStrPtr++] = '2';
            result[newStrPtr++] = '0';
        }
    }
    return result.join('');
}

testCases.forEach((testCase) => {
    console.log(swapSpaces(testCase))
})
