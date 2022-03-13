// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let chars = new Set(),
        left = 0,
        right = 0,
        result = 0;
    
    while (right !== s.length) {
        while (chars.has(s[right])) {
            chars.delete(s[left]);
            left++;
        }
        
        chars.add(s[right]);
        
        result = Math.max(result, right - left + 1);
        
        right++;
    }
    
    return result;
};