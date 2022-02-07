// Add any extra import statements you may need here


// Definition for a Node
function Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
};

// More efficient solution:
// Traverse through tree and maintain a hashmap of all the letters
// and their respective counts

// Use dfs (O(V+E))
// hashmap
// node -> letter count
// letter count = {'a' : 2, 'b' : 1, ...}

// go through each query and check hashmap
// O(queries.length)

function countOfNodes(root, queries, string) {
  // do bfs and dfs solution
  let result = [],
      queue = [root],
      treeArr = new Array(string.length + 1);
  
  // Go through entire tree and map its node value
  // to same index value in treeArr O(V + E)
  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let currentNode = queue.shift(),
          nodeNum = currentNode.val;

      treeArr[nodeNum] = currentNode;

      if (currentNode.children) {
        for (let j = 0; j < currentNode.children.length; j++) {
          queue.push(currentNode.children[j]);
        }
      }
    }
  }
  
  // queries.length = Q
  // O(Q) for the for loop
  // O(V + E) for BFS call
  // so this for loop total time complexity = O(Q(V+E))
  for (let i = 0; i < queries.length; i++) {
    let nodeNum = queries[i][0],
        letter = queries[i][1];
    
    result.push(bfs(treeArr[nodeNum], letter, string));
  }
 
  // entire function time complexity:
  // = O(V + E) + O(Q * (V + E))
  // = O(Q * (V + E))
  
  return result;
}
  
function bfs(root, letter, string) {
  let queue = [root],
      count = 0;
  
  while (queue.length > 0) {
    let len = queue.length;
    // console.log(queue);
    
    // each element of queue is another array
    for (let i = 0; i < len; i++) {
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

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

// Testcase 1
var n_1 = 3, q_1 = 1;
var s_1 = "aba";
var node_1 = new Array(n_1 + 1);
for (var i = 1; i <= n_1; i++) {
  node_1[i] = new Node(i);
}
var root1 = node_1[1];
node_1[1].children = [node_1[2], node_1[3]];
var queries_1 = [[1, 'a']];
var output_1 = countOfNodes(root1, queries_1, s_1); 
var expected_1 = [2];
check(expected_1, output_1);

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
var output_2 = countOfNodes(root2, queries_2, s_2); 
var expected_2 = [4, 1, 2];
check(expected_2, output_2); 

/**
           1a
       /    |   \
      2b    3a  7b
     / \    |
    4a  5c  6a


*/