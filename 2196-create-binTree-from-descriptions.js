// https://leetcode.com/problems/create-binary-tree-from-descriptions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
/**
    Iterate through descriptions array to create each object/node and add the node value and node as a pair
    to hash map. If the parent already exists in hash map, use that to create relationship with child. During
    that iteration also add every child to another hash set.
    
    After that iteration, iterate through descriptions again and check hash set to find head of tree.
    
    time complexity: O(N)
 */
    var createBinaryTree = function(descriptions) {
        let nodes = new Map(),
            children = new Set();
        
        for (let [parent, child, isLeft] of descriptions) {
            let parentNode = nodes.get(parent) || new TreeNode(parent),
                childNode = nodes.get(child) || new TreeNode(child);
            
            if (isLeft) parentNode.left = childNode;
            else parentNode.right = childNode;
            
            nodes.set(parent, parentNode);
            nodes.set(child, childNode);
            
            children.add(child);
        }
        
        for (let i = 0; i < descriptions.length; i++) {
            if (!children.has(descriptions[i][0])) return nodes.get(descriptions[i][0]);
        }
    };