// https://leetcode.com/problems/invert-binary-tree/submissions/
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    
    function dfs(root) {
        if (!root) return root;
        
        let right = dfs(root.right),
            left = dfs(root.left);
        
        root.left = right;
        root.right = left;
        
        return root;
    }
  
    return dfs(root);
};