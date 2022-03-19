// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // Time Complexity: O(N^2)
    
    let result = '',
        resultLen = 0;

    // Iterate through entire string and treat each char at i as a center
    // of a palindrome. Expand the palindrome window until left and right
    // char's aren't matching or out of the string boundaries.
    //
    // IMPORTANT: Remember that a plaindrome may be of even length i.e.
    // the center of it may actually be two chars instead of one like in
    // a odd length palindrome.
    for (let i = 0; i < s.length; i++) {
        // odd length palindromes
        let [left, right] = [i, i];
        
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > resultLen) {
                result = s.substring(left, right + 1);
                resultLen = right - left + 1;
            }
            left--;
            right++;
        }
        
        // check in case there's an even length palindrome
        [left, right] = [i, i + 1];
        
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if ((right - left + 1) > resultLen) {
                result = s.substring(left, right + 1);
                resultLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    
    return result;
};