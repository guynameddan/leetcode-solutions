// https://leetcode.com/problems/rotate-image/submissions/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    // can be rotate with some matrix math. rotating 90 degrees CW is just
    // transpose and then reverse each row

    // transpose
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};