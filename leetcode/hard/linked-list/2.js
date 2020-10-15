// https://leetcode.com/explore/interview/card/top-interview-questions-hard/117/linked-list/840/
// Sort List

// 116 ms 46.7 MB 54%
var sortList = function(head) {
    const merge = (list1, list2) => {
        let ptr1 = list1;
        let ptr2 = list2;
        let head = { next: null };
        let result = head;
        while (ptr1 && ptr2) {
            if (ptr1.val > ptr2.val) {
                head.next = ptr2;
                ptr2 = ptr2.next;
            } else {
                head.next = ptr1;
                ptr1 = ptr1.next;
            }
            head = head.next;
        }
        if (ptr1) head.next = ptr1;
        if (ptr2) head.next = ptr2;
        return result.next;
    }
    
    const sort = (head) => {
        if (!head || !head.next) {
            return head;
        }
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let list2 = slow.next;
        slow.next = null;
        return merge(sort(head), sort(list2));
    }
    
    const result = sort(head);
    return result;
};