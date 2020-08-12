// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/
// Merge Two Sorted Lists

// 88 ms 39.3 MB 56.92%
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return l1;
    const pointers = [];
    let p1 = l1;
    let p2 = l2;
    
    while (p1 !== null && p2 !== null) {
        if (p1.val > p2.val) {
            pointers.push(p2);
            p2 = p2.next;
        } else {
            pointers.push(p1);
            p1 = p1.next;
        }
    }
    
    if (p1 === null) {
        while (p2 !== null) {
            pointers.push(p2);
            p2 = p2.next;
        }
    } else if (p2 === null) {
        while (p1 !== null) {
            pointers.push(p1);
            p1 = p1.next;
        }
    }
    
    for (let i = 0; i < pointers.length; i++) {
        pointers[i].next = i < pointers.length - 1 ? pointers[i + 1] : null;
    }
    
    return pointers[0];
};