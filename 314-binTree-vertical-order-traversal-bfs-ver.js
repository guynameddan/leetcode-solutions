// https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
 var verticalOrder = function(root) {
    if (!root) return [];
    
    let queue = [[root, 0]],
        maxCol = 0,
        minCol = 0,
        columnHash = new Map(),
        result = [];
    
    while (queue.length !== 0) {
        let [currentNode, col] = queue.shift();
        
        if (!columnHash.has(col)) {
            columnHash.set(col, [currentNode.val]);
        } else {
            columnHash.get(col).push(currentNode.val);
        }
        
        minCol = Math.min(minCol, col);
        maxCol = Math.max(maxCol, col);
        
        if (currentNode.left) queue.push([currentNode.left, col - 1]);
        if (currentNode.right) queue.push([currentNode.right, col + 1]);
    }
    
    for (let i = minCol; i < maxCol + 1; i++) {
        result.push(columnHash.get(i));
    }
    
    return result;
};