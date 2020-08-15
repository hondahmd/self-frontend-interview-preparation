// url: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
// Validate Binary Search Tree

// v1 very low effiency :(
var isValidBST = function(root) {
    let result = 0;
    const checkLeft = (left, rootVal) => {
        const goThrough = (node) => {
            if (!node) return;
            if (node.val >= rootVal) {
                result +=1;
                return;
            }
            goThrough(node.left);
            goThrough(node.right);
        }
        goThrough(left);
    };
    const checkRight = (right, rootVal) => {
        const goThrough = (node) => {
            if (!node) return;
            if (node.val <= rootVal) {
                result +=1;
                return;
            }
            goThrough(node.left);
            goThrough(node.right);
        }
        goThrough(right);
    };
    
    const checkAll = (node) => {
        if (!node) return;
        console.log(node.val);
        checkLeft(node.left, node.val);
        checkRight(node.right, node.val);
        checkAll(node.left);
        checkAll(node.right);
    }
    
    checkAll(root);
    return !result;
};


// v2 104 ms 43.2 MB 28.7% a bit better
var isValidBST = function(root) {
    const checkNode = (node, min, max) => {
        if (!node) return true;
        if (!checkNode(node.left, min, node.val)) {
            return false;
        }
        if (node.val <= min || node.val >= max) {
            console.log(node.val);
            return false;
        }
        if (!checkNode(node.right, node.val, max)) {
            console.log('right', node.val);
            return false;
        }
        return true;
    }
    return checkNode(root, Number.NEGATIVE_INFINITY, Number.MAX_VALUE);
};