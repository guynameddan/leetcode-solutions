// https://leetcode.com/problems/counting-words-with-a-given-prefix/
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
    let result = 0;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < pref.length; j++) {
            if (words[i][j] !== pref[j]) break;
            else if (j === pref.length - 1) result++;
        }
    }
    
    return result;
    
};