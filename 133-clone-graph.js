// https://leetcode.com/problems/clone-graph/
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    let oldToClone = new Map();
    
    function dfs(node) {
        if (!node) return node;
        
        if (oldToClone.has(node)) {
            return oldToClone.get(node);
        }
        
        let clone = new Node(node.val);
        
        oldToClone.set(node, clone)
        
        for (let nei of node.neighbors) {
            // use .map() on object node.neighbors and pass
            // a call back function, dfs. What this does is
            // pass each neighbor in this.neighbors as an
            // argument to dfs. Brilliant!!!
            clone.neighbors = node.neighbors.map(dfs);
        }
        
        return clone;
    }
    
    return dfs(node);
    
};