// https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
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
 * @return {number}
 */
 var maxDepth = function(root) {
    
    function dfs(node) {
        if (node === null) return 0;
        
        let count = 1;
        
        return count + Math.max(dfs(node.left), dfs(node.right));
    }
        
    return dfs(root);
};