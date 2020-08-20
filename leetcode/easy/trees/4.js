// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/
// Binary Tree Level Order Traversal

// 72 ms 38.7 MB
var levelOrder = function(root) {
    const result = [];
    
    const oneStep = (node, level) => {
        if (!node) return;
        if (result.length < level + 1) result.push([]);
        
        result[level].push(node.val);
        
        oneStep(node.left, level + 1);
        oneStep(node.right, level + 1);
    }
    
    oneStep(root, 0);
    return result;
};