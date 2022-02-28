// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {

    let directionRow = [0, 1, 0, -1],
        directionCol = [1, 0, -1, 0],
        direction = 0,
        value = 0,
        row = 0,
        col = 0,
        limit = matrix.length * matrix[0].length,
        result = [],
        visited = new Set();
    
    visited.add(`(${row},${col})`);
    
    while (value++ < limit) {
        result.push(matrix[row][col]);
                
        row += directionRow[direction];
        col += directionCol[direction];
        
        if (isInvalid(matrix, row, col, visited)) {
            row -= directionRow[direction];
            col -= directionCol[direction];
            
            direction = (direction + 1) % 4;
            
            row += directionRow[direction];
            col += directionCol[direction];
        }
        
        visited.add(`(${row},${col})`);
    }
    
    return result;
    
};

function isInvalid(matrix, row, col, visited) {
    return row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || visited.has(`(${row},${col})`);
}