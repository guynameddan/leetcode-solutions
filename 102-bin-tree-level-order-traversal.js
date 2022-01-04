https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
        
    function bfs(node) {
        let result = [],
            queue = [node];
        
        while (queue.length > 0) {
            let level = [],
                length = queue.length;
            
            for (let i = 0; i < length; i++) {
                
                let currentNode = queue.shift();
                
                if (currentNode) {
                    level.push(currentNode.val);
                    if (currentNode.left !== null) queue.push(currentNode.left);
                    if (currentNode.right !== null) queue.push(currentNode.right);
                }
            }
            
            if (level.length > 0) result.push(level);
        }
        
        return result;
    }
    
    return bfs(root);
    
};