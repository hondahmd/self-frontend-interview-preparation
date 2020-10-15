// https://leetcode.com/explore/interview/card/top-interview-questions-hard/117/linked-list/841/
// Copy List with Random Pointer

// 80 ms 40.1 MB 56%
var copyRandomList = function(head) {
    if (!head) return null;
    
    const nodes = [];
    let ptr = head;
    let count = 0;
    while (ptr) {
        const node = new Node(ptr.val);
        nodes.push(node);
        ptr.index = count;
        count++;
        ptr = ptr.next;
    }
    
    ptr = head;
    nodes.forEach((node, index) => {
        node.next = index === nodes.length - 1 ? null : nodes[index + 1];
        node.random = ptr.random ? nodes[ptr.random.index] : null;
        ptr = ptr.next;
    })
    return nodes[0];
};