// url: https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/789/
// Populating Next Right Pointers in Each Node

var connect = function(root) {
    if (root === null) return null;
    const next = []; 
    
    next.push(root);
    while (next.length !== 0) {
        const length = next.length;
        for (let i = 0; i < length; i++) {
            const current = next[0];
            if (current.left) next.push(current.left);
            if (current.right) next.push(current.right);
            if (i !== length - 1) current.next = next[1];
            else current.next = null;
            next.shift();
        }
    }
    
    
    return root;
};