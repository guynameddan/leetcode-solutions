// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    
    
    for(let row = 1; row < dp.length; row++) {

        for (let col = 1; col < dp[0].length; col++) {
            // console.log(text1[row] === text2[col]);
            if (text1[row-1] === text2[col-1]) dp[row][col] = dp[row-1][col-1] + 1;
            else dp[row][col] = Math.max(dp[row][col-1], dp[row-1][col]);
        }
    }
    
    return dp[text1.length][text2.length];
};