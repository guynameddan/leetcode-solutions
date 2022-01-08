/*
 Given a binary tree in which nodes are inserted top down, from left to right, with values consisting of increasing integers (i.e. 1, 2, 3, 4, ...),
find the height/depth of a node given its integer value.


		1
	|   |
	2   3
/  \  / \
4  5  6  7 ...

		1
	|   |
	2   3
/  \  / \
4  5  6  7
8  9  10 11  12 13  14 15


		1
	|   |
	2   3
/  \  / \
4  5 null null


BF:

DFS. Look through each branch until we get the value we're looking for. O(N)


possibly better?

BFS O(full depth)

 
 function Node() {
 	this.val = value;
  this.left = null;
  this.right = null;
 }
 
 1) account for null nodes
 2) complete but not balanced
 
 O(log(N))
 O(1)
 
 Current function assumes a tree/node object passed in. Can we account for the target and no tree object argument?
 
 sol'n:
 
 */

 function foo( headNode: Node, target: int) {
  
    let currentNode = headNode,
        depth = 1;
      
    while (currentNode) {
      
      if (currentNode.val >= target) {
        return depth;
      }
      
      // if (currentNode.right) currentNode = currentNode.right;
      // else currentNode = currentNode.left;
      
      
      currentNode = currentNode.right;
      depth++;
  
    }
   
    return depth;
    
  }
  
  