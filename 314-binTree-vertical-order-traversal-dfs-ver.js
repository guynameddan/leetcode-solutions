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
    // dfs ver
    if (!root) return [];
    
    let columnHash = new Map(),
        maxCol = 0,
        minCol = 0,
        result = [];
    

    
    dfs(root, 0, 0);

    for (let i = minCol; i <= maxCol; i++) {
        let nodeArr = columnHash.get(i).sort((a, b) => a[0] - b[0]),
            valArr = [];
        
        for (let j = 0; j < nodeArr.length; j++) {
            valArr.push(nodeArr[j][1]);
        }
        
        result.push(valArr);
    }
    
    return result;
    
    function dfs(node, row, col) {
        if (!node) return;
        
        maxCol = Math.max(maxCol, col);
        minCol = Math.min(minCol, col);
        
        if (!columnHash.has(col)) {
            columnHash.set(col, [[row, node.val]]);
        } else {
            columnHash.get(col).push([row, node.val]);
        }
        
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }
};



