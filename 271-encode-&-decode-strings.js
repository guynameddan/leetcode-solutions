// https://www.lintcode.com/problem/659/
// https://leetcode.com/problems/encode-and-decode-strings/
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
// Time complexity is O(N) because we only have to go through
// the entire strs array once.
var encode = function(strs) {
    // Append the string length, then a delimiter of
    // your choice, then the string, and repeat until
    // the end of strs
    let result = '';
    
    for (let str of strs) {
        result += str.length + '|' + str;
    }
        
    return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    // Now we reverse what happened above. Create and
    // empty array and 2 variables to help index
    // through strings. Any chars up to but not
    // including the delimiter will be the string
    // length. Since we know the starting index of the
    // string and the length of it, a simple call using
    // the substring method can help get us the string.
    // Finally push it to the array and repeat until the
    // end of the input string, s.
    
    let [result, i] = [[], 0];
    
    while (i < s.length) {
        let j = i;
        
        while (s[j] != '|') {
            j++;
        }
        
        // REMEMBER: j is where the delimiter is so
        // we don't have to include it.
        let length = +s.substring(i, j);
        
        result.push(s.substring(j + 1, j + 1 + length));
        
        i = j + 1 + length;
    }
    
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */