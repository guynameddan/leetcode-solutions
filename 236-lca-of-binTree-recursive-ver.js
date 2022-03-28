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
    this.result = null;
    
    function recurse(currentNode, result) {
        if (!currentNode) return false;

        let left = recurse(currentNode.left),
            right = recurse(currentNode.right),
            mid = (currentNode === p || currentNode === q);


        // Need at least 2 trues. True is equal to 1 and false
        // is 0.
        if (mid + left + right >= 2) this.result = currentNode;
        
        // console.log(result);
        
        // just need 1 true
        return mid || left || right;
    }
    
    recurse(root, this.result);
    
    // console.log(result);
    
    return this.result;
};

