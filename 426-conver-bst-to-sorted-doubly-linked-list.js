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
    if (root === null) return root;
    
    let dummy = new Node(0),
        head = dummy,
        stack = [],
        currentNode = root;
    
    // iterative inorder dfs
    while (currentNode !== null || stack.length > 0) {
        while (currentNode !== null ) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        
        currentNode = stack.pop();
        
        head.right = currentNode;
        let prev = head;
        head = head.right;
        head.left = prev;
        
        currentNode = currentNode.right;
        // console.log(currentNode);
    }
    
    // console.log(head);
    
    head.right = dummy.right;
    prev = head;
    head = head.right;
    head.left = prev;
    
    return dummy.right;
};