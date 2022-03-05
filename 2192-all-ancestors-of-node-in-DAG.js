// https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
 var getAncestors = function(n, edges) {
    let arr = Array(n).fill(1).map(el => new Set()),
        visited = new Set(),
        egs = [];

    // create an adjacency list such that each index
    // of egs has an array with all the nodes the node/index
    // goes to.
    for (let [from, to] of edges) {
        if(egs[from]) egs[from].push(to);
        else egs[from] = [to];
    }
    
    // 
    const dfs = (current, origin) => {
        if (current != origin) {
            arr[current].add(origin);
        }
        
        // if we already visited this node with a path starting
        // from origin node, return
        if (visited.has(current)) return;
        
        // if the current node doesn't have any edges coming OUT
        // of it, return
        if (!egs[current]) return;
        
        // add the current node to visited so we don't go in circles
        // i.e. an infinite loop
        visited.add(current);
        
        // recursively go through every edge coming out of the current
        // node
        for (let destination of egs[current]) {
            dfs(destination, origin);
        }
    }
    
    // visit each node from 0 to n and build the solution array
    for (let i = 0; i < n; i++) {
        dfs(i, i);
        visited.clear();
    }
    
    // each index of arr has a set object so use map and Array.from
    // to turn the set objects into arrays
    return arr.map(set => {
        return Array.from(set);
    })
};
