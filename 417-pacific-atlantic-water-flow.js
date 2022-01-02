// https://leetcode.com/problems/pacific-atlantic-water-flow/
/**
 * @param {number[][]} heights
 * @return {number[][]}
 
    REMEMBER!! Think of this problem as "Can this index reach the ocean I'm starting from?" and not
    "Can the ocean get to the other side?". We are NOT checking if an element can reach to the other
    side/ocean. We're starting from one ocean and then checking if each index moving away from the
    ocean could come back to the origin ocean.
*/
 var pacificAtlantic = function(heights) {
    if(!heights.length) return [];
    
    let rowCount = heights.length,
        colCount = heights[0].length,
        pacificOcn = new Set(),
        atlanticOcn = new Set();
    
    function dfs(row, col, visited, prevHeight) {

        // 1) check necessary conditions   
        if (visited.has(`${row}, ${col}`)) { // check if we've visited before
            return; 
        } else if (row < 0 || col < 0 || row >= rowCount || col >= colCount) { // check if in bounds
            return;
        } else if (heights[row][col] < prevHeight) { // check if previous height was higher
            return;
        }
        
        // 2) process data in cell to build up solution
        visited.add(`${row}, ${col}`);

        // 3) call dfs as needed        
        dfs(row + 1, col, visited, heights[row][col]); // down
        dfs(row - 1, col, visited, heights[row][col]); // up
        dfs(row, col + 1, visited, heights[row][col]); // right
        dfs(row, col - 1, visited, heights[row][col]); // left
    }
    
    // top and bottom
    for (let col = 0; col < colCount; col++) {
        dfs(0, col, pacificOcn, heights[0][col]);
        dfs(rowCount - 1, col, atlanticOcn, heights[rowCount - 1][col]);
    }
    
    // left and right
    for (let row = 0; row < rowCount; row++) {
        // console.log(row);
        dfs(row, 0, pacificOcn, heights[row][0]);
        dfs(row, colCount - 1, atlanticOcn, heights[row][colCount - 1]);
    }
    
    let result = [];
   
    // return every pair that can reach both oceans
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            if (pacificOcn.has(`${row}, ${col}`) && atlanticOcn.has(`${row}, ${col}`)) {
                result.push([row, col]);
            }
        }
    }
    
    return result;
};
    

    