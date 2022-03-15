// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    // time complexity for this is O(s.length * log(s.length)) + O(t.length * log(t.length))
    // space complexity could be O(1). Some people consider sort method to be constant space
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    
    return s === t;
};