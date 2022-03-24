// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let left = 0,
        right = s.length - 1;
    
    // IMPORTANT: Don't use the string.substring() method because it costs O(N)
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        
        left++;
        right--;
    }
    
    return true;    
};

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        
        left++;
        right--;
    }
    
    return true;
}