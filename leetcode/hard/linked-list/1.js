// https://leetcode.com/explore/interview/card/top-interview-questions-hard/117/linked-list/839/
// Merge k Sorted Lists

// 352 ms 44.4 MB 25%
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    
    const mergeTwo = (headOne, headTwo) => {
        let ptrOne = headOne;
        let ptrTwo = headTwo;
        let head = { next: null };
        let result = head;
        while (ptrOne && ptrTwo) {
            if (ptrOne.val > ptrTwo.val) {
                head.next = ptrTwo;
                head = head.next;
                ptrTwo = ptrTwo.next;
            } else {
                head.next = ptrOne;
                head = head.next;
                ptrOne = ptrOne.next;
            }
        }
        if (ptrOne) {
            head.next = ptrOne;
        }
        if (ptrTwo) {
            head.next = ptrTwo;
        }
        return result.next;
    }
    
    for (let i = 0; i < lists.length - 1; i++) {
        const current = mergeTwo(lists[i], lists[i + 1]); 
        lists[i + 1] = current;
    }
    
    return lists[lists.length - 1];
};