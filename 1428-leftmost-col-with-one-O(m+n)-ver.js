// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solution/
/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
 var leftMostColumnWithOne = function(binaryMatrix) {
    // O(M + N)
    let [rows, cols] = binaryMatrix.dimensions();
    
    // Set to top right corner
    let currRow = 0,
        currCol = cols - 1;
    
    while (currRow < rows && currCol >= 0) {
        if (binaryMatrix.get(currRow, currCol) === 0) currRow++;
        else currCol--;
    }
    
    // If the the column value is just the last column,
    // that means no 1s were found. If not, that means
    // the loop above either went out of bounds on the bottom
    // or left side of the matrix. Either way the leftmost
    // column for the solution will just be whatever the
    // current column value is plus 1.
    return currCol !== cols - 1 ? currCol + 1 : -1;
};