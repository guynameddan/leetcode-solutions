/**
 * @param {string} s
 * @return {number}
 * 
 *  A message containing letters from A-Z can be encoded into numbers using the following mapping:
 *
 *  'A' -> "1"
 *  'B' -> "2"
 *  ...
 *  'Z' -> "26"
 *  To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
 *
 *  "AAJF" with the grouping (1 1 10 6)
 *  "KJF" with the grouping (11 10 6)
 *  Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 *
 *  Given a string s containing only digits, return the number of ways to decode it.
 *
 *  The answer is guaranteed to fit in a 32-bit integer.
 */
 var numDecodings = function(s) {
    //////////////////////////////
    //      recursive method    //
    //////////////////////////////

    const memo = Array(s.length+1).fill(0)
    return helper(s, s.length, memo)
};

function helper(data, k, memo) {
    // k is the number of chars I'm looking at after
    // the 0th index
    if (k==0) {
        return 1;
    }
    
    // s is for the idx of data
    let s = data.length - k;
    if (data[s] == '0') {
        return 0;
    }
    
    if (memo[k] != 0) {
        return memo[k];
    }
    
    let result = helper(data, k - 1, memo);
    if (k >= 2 && data.slice(s, s+2) <= 26) {
        result += helper(data, k - 2, memo)
    }

    memo[k] = result;
    return result;
}