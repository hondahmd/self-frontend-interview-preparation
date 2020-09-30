const fullJustify = (words, maxWidth) => {
    const result = [];
    let wordsInLine = [];
    let lineLength = 0;
    let tempMax = maxWidth;

    const genLine = () => {
        const spaces = maxWidth - lineLength;
        const avgSpaces = Math.floor(spaces / (wordsInLine.length - 1));
        const leftSpaces = spaces - avgSpaces * (wordsInLine.length - 1);
        return wordsInLine.reduce((acc, cur, index) => {
            if (index === wordsInLine.length - 1) return `${acc}${cur}`
            const spaces = Array(avgSpaces + (index < leftSpaces ? 1 : 0)).fill(' ').join('');
            return `${acc}${cur}${spaces}`;
        }, '');
    }

    for (let i = 0; i < words.length;) {
        const current = words[i];
        if (lineLength + current.length <= tempMax) {
            wordsInLine.push(current);
            lineLength += current.length;
            i++;
            tempMax--;
        } else {
            const line = genLine();
            result.push(line);
            tempMax = maxWidth;
            wordsInLine = [];
            lineLength = 0;
        }
    }

    if (wordsInLine.length > 0) {
        result.push(wordsInLine.reduce((acc, cur, index) => {
            if (index === wordsInLine.length - 1) return `${acc}${cur}`;
            return `${acc}${cur} `;
        }, ''));
    }

    return result;
}

const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
const result = fullJustify(words, maxWidth);
console.log(result);