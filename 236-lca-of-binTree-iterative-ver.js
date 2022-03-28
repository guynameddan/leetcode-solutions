// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // iterative with parent pointers
    
    let stack = [root],
        parent = new Map();
    
    parent.set(root, null);
    
    // iterate until both nodes found
    while (!parent.has(p) || !parent.has(q)) {
        let currentNode = stack.pop();
        
        // create parent pointers
        if (currentNode.left) {
            parent.set(currentNode.left, currentNode);
            stack.push(currentNode.left);
        }
        
        if (currentNode.right) {
            parent.set(currentNode.right, currentNode);
            stack.push(currentNode.right);
        }
    }
    
    let nodeP = p,
        nodeQ = q;
    
    while (nodeP !== nodeQ) {
        nodeP = nodeP !== null ? parent.get(nodeP) : q;
        nodeQ = nodeQ !== null ? parent.get(nodeQ) : p;
    }
    
    return nodeP;
    
};