// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    
    dp[s.length] = true;
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {

            if ((i + word.length <= s.length) && (s.substring(i, i + word.length)) == word) {
              dp[i] = dp[i + word.length];  
            }
            if (dp[i]) break;
        }
    }
        
    return dp[0];
};