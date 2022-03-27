// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    if (!root) return root;
    
    let head = null,
        prev;
    
    function inOrderDFS(node) {
        if (!node) return;
        
        inOrderDFS(node.left);
        
        // head will be set to the left most node since
        // this is inorder traversal. Then head will never
        // change.
        if (!head) {
            head = node;
            prev = node;
        } else {
            node.left = prev;
            prev.right = node;
            prev = node;
        }
        
        inOrderDFS(node.right);
    }
    
    inOrderDFS(root);
    
    // prev is the last node of inorder traversal
    prev.right = head;
    
    // left most node will now be linked to final
    // node of inorder traversal;
    head.left = prev;
    
    return head;
};