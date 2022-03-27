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
    
    let result = [],
        queue = [root];
    
    while (queue.length > 0) {
        levelLen = queue.length;
        
        for (let i = 0; i < levelLen; i++) {
            let currentNode = queue.shift();
            
            if (i === levelLen - 1) {
                result.push(currentNode.val);
            }
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
    
    return result;    
};