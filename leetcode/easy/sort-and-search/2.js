var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1 || isBadVersion(1)) return 1;
        
        const mid = (start, end) => Math.floor((start + end) / 2);
        
        let start = 1;
        let end = n - 1;
        while (start <= end) {
            const midIndex = mid(start, end);
            const cur = isBadVersion(midIndex);
            const next = isBadVersion(midIndex + 1);
            if (cur ^ next) return midIndex + 1;
            if (cur) {
                end = midIndex;
            } else {
                start = midIndex + 1;
            }
        }
    };
};