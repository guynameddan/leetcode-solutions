// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var minSteps = function(s, t) {
    
    let sMap = new Map(),
        tMap = new Map(),
        count = 0,
        result = 0;
    
    // string s hash map
    for (let i = 0; i < s.length; i++) {
        if (!sMap.has(s[i])) sMap.set(s[i], 1);
        else {
            count = sMap.get(s[i]);
            sMap.set(s[i], ++count);
        }
    }
    
    // string t hash map
    for (let j = 0; j < t.length; j++) {
        if (!tMap.has(t[j])) tMap.set(t[j], 1);
        else {
            count = tMap.get(t[j]);
            tMap.set(t[j], ++count);
        }
    }
    
    // check what letters and counts are diff from each word
    for (const [letter, amt] of sMap.entries()) {
        // console.log(letter);
        if (tMap.has(letter) && (tMap.get(letter) > sMap.get(letter))) {
            result += tMap.get(letter) - sMap.get(letter);
        } else if (!tMap.has(letter)) {
            result += amt;
        }
    }
    
    for (const [letter, amt] of tMap.entries()) {
        if (sMap.has(letter) && (sMap.get(letter) > tMap.get(letter))) {
            result += sMap.get(letter) - tMap.get(letter);
        } else if (!sMap.has(letter)) {
            result += amt;
        }
    }
    
    return result;
    
};