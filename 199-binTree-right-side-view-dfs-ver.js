// https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return [];
    
    let result = [];
    
    function dfs(currentNode, level) {
        if (level === result.length) {
            result.push(currentNode.val);
        }
        
        if (currentNode.right) dfs(currentNode.right, level + 1);
        if (currentNode.left) dfs(currentNode.left, level + 1);
    }
    
    dfs(root, 0);
    
    return result;
};