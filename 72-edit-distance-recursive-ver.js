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

// Following is the recursive version of the solution
var minDistance = function(word1, word2) {
     
    const [row, col] = [word1.length + 1, word2.length + 1];
    const memo = new Array(row).fill().map(() => new Array(col).fill(-1));

    const minDist = (w1, w2, i, j, memo) => {
        if (memo[i][j] > -1) {
            return memo[i][j];
        }
        
        if (i == 0) {
            memo[i][j] = j;
            return j;
        }
        
        if (j == 0) {
            memo[i][j] = i;
            return i;
        }
        
        if (w1[i-1] == w2[j-1]) {
            memo[i][j] = minDist(w1, w2, i-1, j-1, memo);
            return memo[i][j];
        }

        memo[i][j] = Math.min(
            minDist(w1, w2, i-1, j, memo) + 1,
            minDist(w1, w2, i, j-1, memo) + 1,
            minDist(w1, w2, i-1, j-1, memo) +1);
        
        return memo[i][j];
    }
    
    return minDist(word1, word2, word1.length, word2.length, memo)
};