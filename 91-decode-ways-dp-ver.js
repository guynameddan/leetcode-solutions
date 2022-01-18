// https://leetcode.com/problems/decode-ways/
/**
 * @param {string}
 * @return {number}
 */
 var numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = (s[0] > 0) ? 1 : 0;
    
    for (let length = 2; length <= s.length; length++) {
        let oneDigit = s.substring(length-1, length),
            twoDigit = s.substring(length-2, length);
        
        if (oneDigit > 0) dp[length] += dp[length-1];
        if (twoDigit <= 26 && twoDigit >= 10) dp[length] += dp[length-2];
    }
    
    return dp[s.length];
};