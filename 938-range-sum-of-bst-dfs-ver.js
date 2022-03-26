// https://leetcode.com/problems/range-sum-of-bst/
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    
    return dfs(root, low, high);
};

function dfs(root, low, high) {
    if (!root) return 0;
    
    let sum = (root.val >= low && root.val <= high) ? root.val : 0;

    if (root.val > low) sum += dfs(root.left, low, high);
    
    if (root.val < high) sum += dfs(root.right, low, high);
    
    return sum;
}