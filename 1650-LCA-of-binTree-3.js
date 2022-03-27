// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var lowestCommonAncestor = function(p, q) {
    let pSet = new Set();
    
    while (p) {
        pSet.add(p);
        p = p.parent;
    }
    
    while (q) {
        if (pSet.has(q)) return q;
        
        q = q.parent;
    }
};

// for some reason below is faster
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var lowestCommonAncestor = function(p, q) {
    let [nodeA, nodeB] = [p, q];
    
    while (nodeA !== nodeB) {
        nodeA = nodeA === null ? q : nodeA.parent;
        nodeB = nodeB === null ? p : nodeB.parent;
    }
    
    return nodeA;
};