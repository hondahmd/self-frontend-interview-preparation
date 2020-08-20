// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/
// Symmetric Tree

// 84 ms 38.9 MB
var isSymmetric = function(root) {
    let result = 0;
    const oneStep = (node1, node2) => {
        if (!node1 && !node2) return;
        if (!node1 && node2) {
            result++;
            return;
        }
        if (node1 && !node2) {
            result++;
            return;
        }
        
        if (node1.val !== node2.val) {
            result++;
            return;
        }
        
        oneStep(node1.left, node2.right);
        oneStep(node1.right, node2.left);
    }
    
    oneStep(root, root);
    return !result;
};
