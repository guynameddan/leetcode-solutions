// https://leetcode.com/problems/spiral-matrix/submissions/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = [],
        left = 0,
        right = matrix[0].length-1,
        top = 0,
        bottom = matrix.length-1;
    
    while (left <= right && top <= bottom) {
        
        // top row
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;
        
        // right col
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;
        
        // check to see pointers aren't past each other
        if (!(left <= right && top <= bottom)) break;
        
        // bottom row
        for (let col = right; col >= left; col--) {
            // if (top === bottom) break;
            result.push(matrix[bottom][col]);
        }
        bottom--;
        
        // left col
        for (let row = bottom; row >= top; row--) {
            // if (left === right) break;
            result.push(matrix[row][left]);
        }
        left++;

    }
    
    return result;
};