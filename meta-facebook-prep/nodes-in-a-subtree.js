// Definition for a Node
function Node(val, children) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  };
  
  // Add any helper functions you may need here
  
  
  function countOfNodes(root, queries, string) {
    // do bfs and dfs solution
    let result = [];
    
    for (let i = 0; i < queries.length; i++) {
      result.push(bfs(root, queries[i][1], string));
    }
    
    return result;
  }
    
  function bfs(root, letter, string) {
    let queue = [root],
        count = 0;
    
    while (queue.length > 0) {
      let len = queue.length;
    //   console.log(queue);
      
      // each element of queue is another array
      for (let i = 0; i < len; i++) {
        console.log("im in");
        let currentNode = queue.shift(),
            idx = currentNode.val - 1;
  
        if (string[idx] === letter) count++;
        
        if (currentNode.children) {
          for (let k = 0; k < currentNode.children.length; k++) {
            queue.push(currentNode.children[k]);
          }
        }
        
      }
      
    }
    
    return count;
  
  }

  // Testcase 2
var n_2 = 7, q_2 = 3;
var s_2 = "abaacab";
var node_2 = new Array(n_2 + 1);
for (var i = 1; i <= n_2; i++) {
  node_2[i] = new Node(i);
}
var root2 = node_2[1];
node_2[1].children = [node_2[2], node_2[3], node_2[7]];
node_2[2].children = [node_2[4], node_2[5]];
node_2[3].children = [node_2[6]];
var queries_2 = [[1, 'a'], [2, 'b'], [3, 'a']]; 
// var output_2 = countOfNodes(root2, queries_2, s_2); 
// var expected_2 = [4, 1, 2];

console.log(countOfNodes(root2, queries_2, s_2));