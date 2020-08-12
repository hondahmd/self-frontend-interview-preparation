// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
// Reverse Linked List

// 76 ms 38.9 MB
var reverseList = function(head) {
    if (!head) return head;
    const pointers = [];
    
    let current = head;
    while (current !== null) {
        pointers.push(current);
        current = current.next;
    }
    
    for (let i = pointers.length - 1; i >= 0; i--) {
        pointers[i].next = i ? pointers[i - 1] : null;
    }
    
    return pointers[pointers.length - 1];
};
