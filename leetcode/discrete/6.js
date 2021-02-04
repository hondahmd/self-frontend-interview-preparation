const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const result = Array(numRows).fill('');

  const oneGroup = (group) => {
    result[0] += group[0] || '';
    result[numRows - 1] += group[numRows - 1] || '';
    for (let i = 1; i <= numRows - 2; i++) {
      result[i] += `${group[i] || ''}${group[i + (numRows - i - 1) * 2] || ''}`
    }
  }

  const groupLength = 2 * numRows - 2;
  const groupNumber = Math.floor(s.length / groupLength);
  for (let i = 0 ; i <= groupNumber; i++) {
    oneGroup(s.slice(i * groupLength, (i + 1) * groupLength));
  }

  return result.reduce((acc, cur) => acc += cur, '');
}

const s = 'PAYPALISHIRING';
const numRows = 4;

console.log(convert(s, numRows));
