/*
Given a 2D map find the shortest distance from the starting point to the finish
point. You can only move horizontally or vertically. You cannot leave the
boundaries of the map.
 
Open spaces are represented by .
Walls are represented by x
Points are represented as (row, col) where (0,0) is top left corner
 
Eg:
 
Map:
  0 1 2 3
0	s . . .
1	. x x .
2	e . . .


function neighbors(x, y) -> list of valid neighbors

neighbors(0,0) -> [(0,1), (1,0)]
neighbors(0,1) -> [(0,0), (0,2)]

(0,0)
(0,1)
(1,0)
(2,0)
(0,2)

Start point: (0,0) (V, H)
End point: (2,0) (V, H)
 
Shortest path length: 6

BF:

given [[]...]

iterate through array, checking valid path, and only returns value if start to end

  O((m*n) ^ 2)

efficient:

	recursion traversal
  
  moving to adjacent cells
  
  return null or false if we hit wall, 'x'
  
  maintain a global min and always compare current path length with global min if we connect from start to end

	end once we've hit every single index of the 2d array
  
  O(m*n)
  
  
  [start]
  
  check start = end
  
  pop queue => []
  
  push start's neightbors into queue => [(0,1), (1,0)]
  
  
  
*/

// start = (row, col)
// end = (row, col)

// Map

function bfs(start, end) {
  
  let nei = neighbors(start);
  
  
  cord = queue.dequeue
  queue.enqueue(newcord)
  
  if (queue )
  
}
// let startRow = start.row,
//     startCol = start.col,
//     endRow = end.row,
//     endCol = end.col,
//     length = 0,

// 		dfs(startRow, startCol, x, y)
// 		Math.min()

// // check here if start and end is within bounds

// function dfs(startRow, startCol, nextRow, nextCol) {
//   if (Map[startRow][startCol]== 'x' || startRow < 0 || startCol < 0 || startRow >= Map.width || startCol >= Map.height) return;
  
//   length++;
 
//   dfs(startRow-1, startCol, endRow, endCol); // up
//   dfs(startRow+1, startCol, endRow, endCol); // down
//   dfs(startRow, startCol-1, endRow, endCol); // left
//   dfs(startRow, startCol+1, endRow, endCol); // right

//   // short 2 long 8
  
//   if (nextRow == endRow && nextCol == endCol) {
//     return length;
//   }
// }
