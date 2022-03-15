// https://leetcode.com/problems/valid-anagram/submissions/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // time complexity: O(N)
    // space complexity: O(N)
    if (s.length !== t.length) return false;
    
    // create char map of s
    let sChars = new Map();
    
    for (let i = 0; i < s.length; i++) {
        sChars.has(s[i]) ? sChars.set(s[i], sChars.get(s[i]) + 1) : sChars.set(s[i], 1);        
    }
    
    // Iterate through t and check s char map.
    // If a char in t doesn't exist in s, t is not
    // an anagram. Else, decrement the count
    for (let j = 0; j < t.length; j++) {
        if (!sChars.has(t[j])) {
            return false;
        } else {
            let count = sChars.get(t[j]) - 1;
            sChars.set(t[j], count);
        }
    }
    
    // if the 2 are anagrams then each value of
    // the char map should be 0
    for (let [key, value] of sChars) {
        if (value !== 0) return false
    }
    
    return true;
};