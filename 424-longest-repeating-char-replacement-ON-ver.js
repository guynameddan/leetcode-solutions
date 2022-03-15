// https://leetcode.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let count = new Map(),
        result = 0,
        left = 0,
        charCount = 0,
        maxFreq = 0;
    
    for (let right = 0; right < s.length; right++) {
        if(!count.has(s[right])) {
            count.set(s[right], 1);
        } else {
            charCount = count.get(s[right]) + 1;
            count.set(s[right], charCount);
        }
        
        maxFreq = Math.max(maxFreq, count.get(s[right]))
                
        while ((right - left + 1) - maxFreq > k) {
            charCount = count.get(s[left]) - 1;
            count.set(s[left], charCount);
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};