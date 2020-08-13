// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
// Maximum Depth of Binary Tree

// 76 ms 39.9 MB 88.47%
var maxDepth = function(root) {
    const maxForNode = (node) => {
        if (!node) return 0;
        return Math.max(maxForNode(node.left), maxForNode(node.right)) + 1;
    }
    
    return maxForNode(root);
};