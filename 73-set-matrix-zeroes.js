// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let rowZero = false;
    
    // Find out which elements are 0 then make the same
    // column of the first row 0. If the row isn't the
    // first then make the current row's first column 0.
    // If it's the first row then the entire row will be 0.
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0;
                
                if (row > 0) matrix[row][0] = 0;
                else rowZero = true;
            }
        }
    }
    
    // Start changing rows and cols of 0s to 0.
    // If the first row and current col are 0 or
    // if the first col and current row are 0, then set the current
    // element to 0.
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[0][col] === 0 || matrix[row][0] === 0) matrix[row][col] = 0;
        }
    }
    
    // Make the entire first col 0
    if (matrix[0][0] === 0) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0;
        }
    }
    
    // Make the entire first row 0
    if (rowZero) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0;
        }
    }
};