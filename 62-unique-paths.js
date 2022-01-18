// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    
    for (let row = 1; row < m+1; row++) {
        for (let col = 1; col < n+1; col++) {
            if ((row === 1 && col > 0) || (col === 1 && row > 0)) {
                dp[row][col] = 1;
            } else {
                dp[row][col] = dp[row-1][col] + dp[row][col-1];
            }
            
        }
    }
    
    return dp[m][n];
};