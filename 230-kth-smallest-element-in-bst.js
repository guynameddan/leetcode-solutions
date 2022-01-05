// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let nodeCount = 0,
        stack = [],
        currentNode = root;
    
    // uses a stack (LIFO) with inorder traversal
    while (currentNode !== null || stack.length > 0) {
        // keep going left
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        
        // pop most recent node
        currentNode = stack.pop();
        nodeCount++;
        
        if (nodeCount == k) {
            return currentNode.val;
        }
        
        currentNode = currentNode.right;
    }
};