var addTwoNumbers = function(l1, l2) {
    let ptr1 = l1;
    let ptr2 = l2;
    
    const head = new ListNode();
    let prev = head;
    let up = 0;
    
    while(ptr1 && ptr2) {
        const currentVal = ptr1.val + ptr2.val + up;
        up = currentVal > 9;
        const current = new ListNode(currentVal  % 10);
        prev.next = current;
        prev = current;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    
    while(ptr1) {
        const currentVal = ptr1.val + up;
        up = currentVal > 9;
        const current = new ListNode(currentVal  % 10);
        prev.next = current;
        prev = current;
        ptr1 = ptr1.next;
    }
    
    while(ptr2) {
        const currentVal = ptr2.val + up;
        up = currentVal > 9;
        const current = new ListNode(currentVal  % 10);
        prev.next = current;
        prev = current;
        ptr2 = ptr2.next;
    }
    
    if (up) prev.next = new ListNode(1);
    
    return head.next;
};