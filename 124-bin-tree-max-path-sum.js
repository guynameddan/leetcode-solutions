// https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
 var maxPathSum = function(root) {
    
    let globalMax = root.val;
    
    // console.log(typeof globalMax);
    
    function dfs(root) {
        if (!root) return 0;
        
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        
        // if the max returned is < 0,
        // don't bother using that path
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        
        globalMax = Math.max(globalMax, root.val + leftMax + rightMax);
        
        return (root.val + Math.max(leftMax, rightMax));
    }
    
    dfs(root);
    return globalMax;
};