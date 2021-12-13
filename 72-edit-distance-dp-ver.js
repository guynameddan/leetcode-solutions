/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

//  Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

//  You have the following three operations permitted on a word:
 
//    Delete a character
//    Insert a character
//    Replace a character
  
 
//  Example 1:
 
//    Input: word1 = "horse", word2 = "ros"
//    Output: 3
//    Explanation: 
//    horse -> rorse (replace 'h' with 'r')
//    rorse -> rose (remove 'r')
//    rose -> ros (remove 'e')

// Following is the dynamic programming version of the solution
 var minDistance = function(word1, word2) {
    let numRow   = word1.length,
    numCol   = word2.length;

    var dpArr = new Array(numRow);

    // base cases
    for (var i = 0; i <= numRow; i++) {
        dpArr[i] = new Array(numCol+1);
        dpArr[i][0] = i;
        for (var j = 0; j <= numCol; j++) {
            dpArr[0][j] = j;
        }
    }
        
    for (i = 0; i < numRow; i++) {
        for (j = 0; j < numCol; j++) {
            if (word1.charAt(i) == word2.charAt(j)) {
                dpArr[i+1][j+1] = dpArr[i][j];
            } else {
                var replace = dpArr[i][j],
                    insert  = dpArr[i][j+1],
                    remove  = dpArr[i+1][j];
                dpArr[i+1][j+1] = Math.min(replace, insert, remove) + 1;
            }
        }
    }

    return dpArr[numRow][numCol]; 
};