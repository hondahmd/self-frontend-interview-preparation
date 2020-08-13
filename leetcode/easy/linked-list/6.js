// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/
// Linked List Cycle

// 84 ms 39.3 MB 56.89%
var hasCycle = function(head) {
    let ptr = head;
    
    while(ptr !== null && !ptr.touched) {
        ptr.touched = true;
        ptr = ptr.next;
    }
    
    if (ptr === null) return false;
    else return true;
};