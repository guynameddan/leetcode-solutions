/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal
 * of a binary tree and inorder is the inorder traversal of the same tree, construct and
 * return the binary tree.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function(preorder, inorder) {
//     function helper(preStart, preEnd, inStart, inEnd) {
//         if (preStart > preEnd || inStart > inEnd) {
//             return null;
//         }
        
//         var rootVal = preorder[preStart],             // get and set the root value
//             index   = inorder.indexOf(rootVal),       // the index of the root in inorder
//             nLeft   = index - inStart,                // number of nodes in left subtree
//             root    = new TreeNode(rootVal);          // build the root
    
//         // build left and right subtrees
//         root.left  = helper(preStart + 1, preStart + nLeft, inStart, index - 1);
//         root.right = helper(preStart + nLeft + 1, preEnd, index + 1, inEnd);
        
//         return root;
//     }
    
//     return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };


// with caching
var buildTree = function(preorder, inorder) {
    var inOrderIndexLookup = new Map(),
                       len = inorder.length; 
        
    // hashmap of each unique value
    for(var i = 0; i < len; i++) {
        inOrderIndexLookup.set(inorder[i], i);
    }
    
    function helper(preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }
        
        var rootVal = preorder[preStart],
            index   = inorder.indexOf(rootVal),
            nLeft   = index - inStart,
            root    = new TreeNode(rootVal);
        
        root.left  = helper(preStart + 1, preStart + nLeft, inStart, index - 1);
        root.right = helper(preStart + nLeft + 1, preEnd, index + 1, inEnd);
        
        return root;
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};