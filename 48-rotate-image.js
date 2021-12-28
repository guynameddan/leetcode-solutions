// https://leetcode.com/problems/rotate-image/

// Initially attempted to see a pattern based on rows turning into colums then
// tried to find a pattern based on row and column numbers i.e. I tried to do it mathmatically.

// Rotate layer-by-layer. Since nxn move elements/values in groups of corners so top left, top
// right, bottom right, and bottom left. Hold one corner's value in a temporary variable then
// replace that corner with counterclockwise corner and repeat. Since it's an nxn matrix just
// use one for loop and increment row and columns with variable i. Think of i moving zero and
// upto but not including the length between corners i.e. right - left or bottom - top since
// it's nxn.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let right = matrix.length - 1,
        left = 0;

    
    while (left < right) {
        let top = left,
            bottom = right;
        
        // console.log("prefor" + top, bottom)
        // console.log("prefor" + left, right)
        
        for (let i = 0; i < right - left; i++) {
            // hold the top left of matrix in temporary variable
            let temp = matrix[top][left+i];

            // replace values counterclockwise order

            // top left corner will now equal the bottom left corner
            matrix[top][left+i] = matrix[bottom-i][left];

            // bottom left corner overwritten with bottom right corner
            matrix[bottom-i][left] = matrix[bottom][right-i];

            // bottom right corner overwritten with top right corner
            matrix[bottom][right-i] = matrix[top+i][right];

            // top right corner overwritten with pre-rotation top left value
            // which is held in the temporary variable
            matrix[top+i][right] = temp;
        }
        
        left++;
        right--;
        
        // console.log("postfor" + top, bottom)
        // console.log("postfor" + left, right)
    }
};