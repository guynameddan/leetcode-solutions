// https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
 var isValidBST = function(root) {
   
    function valid(node, leftLim, rightLim) {
        if (!node) return true
        
        if (!(node.val < rightLim && node.val > leftLim)) return false
        
        return (valid(node.left, leftLim, node.val) && valid(node.right, node.val, rightLim));
    }
    
    return valid(root, -Infinity, Infinity);
};