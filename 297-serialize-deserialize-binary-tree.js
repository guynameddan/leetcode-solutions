// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let serialArr = [];
    
    function dfsSerial(root) {
        if (!root) {
            serialArr.push('N');
            return;
        }
        
        serialArr.push(root.val.toString());
        
        dfsSerial(root.left);
        dfsSerial(root.right);
        
        return;
    }
    
    dfsSerial(root);
        
    return serialArr.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let deserialArr = data.split(','),
        idx = 0;

    
    function dfsDeserial() {
        if (deserialArr[idx] == 'N') {
            idx++;
            return null;
        }
        
        let node = new TreeNode(Number(deserialArr[idx]));
        
        idx++
        
        node.left = dfsDeserial();
        node.right = dfsDeserial();
        
        return node;
    }
    
    return dfsDeserial();
    
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */