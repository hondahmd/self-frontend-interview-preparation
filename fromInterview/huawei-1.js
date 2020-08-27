// 给1~9的几个数字，将这些数字按任意顺序组合出所有可能的数成为一个数组A，将A排序，取出A中第n个数，n代表给的几个数中最大的数

const findNthNum = (arr) => {
    const sorted = arr.sort();
    const len = arr.length;
    let result = '';

    const factorial = (num) => Array(num).fill().reduce((acc, _, index) => acc *= (index + 1), 1)

    const permutation = (btm, top) => (
        factorial(btm) / factorial((btm - top))
    )

    const findOne = (offset, nth) => {
        const current = Math.ceil(offset / permutation(sorted.length - 1, nth - 1));
        result += String(sorted[current - 1]);
        const newOffset = offset - (current - 1) * permutation(sorted.length - 1, nth - 1);
        sorted.splice(current - 1, 1);
        return newOffset;
    }

    const findNum = (numLen, offset) => {
        let temp = offset;
        Array(numLen).fill().forEach((_, index) => {
            temp = findOne(temp, numLen - index);
        })
    }

    let offset = 0;
    for (let i = 1; i <= len; i++) {
        offset += permutation(len, i);
        if (offset >= sorted[len - 1]) {
            findNum(i, sorted[len - 1] - (offset - permutation(len, i)));
            break;
        }
    }
    return result;
}

const arr = [9, 1];
console.log(findNthNum(arr));
