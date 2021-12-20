// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume
// all four edges of the grid are all surrounded by water.

// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    var counter = 0;
    
    const dfs = (i, j) => {
        if (
          i >= 0 &&
          j >= 0 &&
          i < grid.length &&
          j < grid[i].length &&
          grid[i][j] === '1'
        ) {
          grid[i][j] = '0';
          dfs(i + 1, j); // top
          dfs(i, j + 1); // right
          dfs(i - 1, j); // bottom
          dfs(i, j - 1); // left
        }
      };

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] === '1') {
                counter += 1;
                dfs(i, j);
            }
        }
    }
    
    return counter;
};