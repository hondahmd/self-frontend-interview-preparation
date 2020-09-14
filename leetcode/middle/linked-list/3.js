var getIntersectionNode = function(headA, headB) {
    const calcLen = (head) => {
        let len = 0;
        let ptr = head;
        while(ptr) {
            len++;
            ptr = ptr.next;
        }
        return len;
    }
    
    const lenA = calcLen(headA);
    const lenB = calcLen(headB);
    const gap = Math.abs(lenA - lenB);
    let ptrA = headA;
    let ptrB = headB;
    
    if (lenA > lenB) {
        for(let i = 0; i < gap; i++) ptrA = ptrA.next;
    } else {
        for(let i = 0; i < gap; i++) ptrB = ptrB.next;
    }
    
    while(ptrA && ptrB) {
        if (ptrA === ptrB) return ptrA;
        ptrA = ptrA.next;
        ptrB = ptrB.next;
    }
    return null;
};