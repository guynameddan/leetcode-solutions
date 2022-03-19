// https://leetcode.com/problems/palindromic-substrings/submissions/
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    let count = 0;
    
    for (let center = 0; center < s.length; center++) {
        // check odd length palindromes
        count += countPalindromes(s, center, center);
        
        // check even length palindromes
        count += countPalindromes(s, center, center + 1);
    }
    
    return count;
};

function countPalindromes(s, left, right) {
    let count = 0;
    
    while (left >= 0 && right < s.length &&
          s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    
    return count;
}