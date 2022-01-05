// https://leetcode.com/problems/subtree-of-another-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    // if the subroot is null or nothing is given,
    // we know the root tree also has null or nothing
    if (subRoot===null) return true;
    if (root === null) return false;
    
    // check if the root and subroot are equal
    if (dfsIsEqual(root, subRoot)) return true;
    
    // if not equal, we recurse through the left and right side of root
    // to see if there is a subtree that's equal
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function dfsIsEqual(root, subRoot) {
    if (!root && !subRoot) return true;
    
    if (!root || !subRoot || root.val !== subRoot.val) return false;
    
    // both sides must be true for the root and subRoot to be the same subtree so
    // the and/&& boolean operator is there
    return (dfsIsEqual(root.left, subRoot.left) && dfsIsEqual(root.right, subRoot.right));
}