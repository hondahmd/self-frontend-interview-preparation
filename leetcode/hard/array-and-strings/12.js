
// Original version. This will work, but costs too much time.
const minWindow = (s, t) => {
    if (t.length > s.length) return '';
    const isSuit = (sub) => {
        let temp = sub;
        for (let i = 0; i < t.length; i++) {
            const pos = temp.search(t[i]);
            if (pos === -1) return false;
            temp = `${temp.substring(0, pos)}${temp.substring(pos + 1)}`;
        }
        return true;
    }

    let resultStart = 0;
    let resultEnd = s.length - 1;
    let start = 0;
    let end = 0;
    while (end !== s.length - 1) {
        if (!isSuit(s.substring(start, end + 1))) {
            end++;
        } else {
            while (isSuit(s.substring(start, end + 1))) {
                start++;
            }
            if ((end - start) < (resultEnd - resultStart)) {
                resultStart = start - 1;
                resultEnd = end;
            }
        }
    }

    while (start < s.length) {
        if (isSuit(s.substring(start, end + 1))) {
            if ((end - start) < (resultEnd - resultStart)) {
                resultStart = start;
                resultEnd = end;
            }
        }
        start++;
    }
    const result = s.substring(resultStart, resultEnd + 1);
    return isSuit(result) ? result : '';
}

const s = 'ADOBECODEBANC';
const t = 'ABC';
console.log(minWindow(s, t));
