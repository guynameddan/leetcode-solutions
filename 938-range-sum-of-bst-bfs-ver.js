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
    
    return bfs(root, low, high);
};

function bfs(root, low, high) {
    let queue = [root],
        sum = 0;
    
    while (queue.length > 0) {
        let currentNode = queue.shift();
        
        if (currentNode.val >= low && currentNode.val <= high) {
            sum += currentNode.val;
        }
        
        if (currentNode.left && currentNode.val > low) {
            queue.push(currentNode.left);
        }
        
        if (currentNode.right && currentNode.val < high) {
            queue.push(currentNode.right);
        }
    }
    
    return sum;    
}