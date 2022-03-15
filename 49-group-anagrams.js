// https://leetcode.com/problems/group-anagrams/submissions/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let result = new Map(),
        start = "a";
    
    // For each str, create an array where each index represents
    // letters from alphabet (idx 0 -> a ... idx 25 -> z). Fill
    // the array based on chars in str, i.e. you're making a char
    // map.
    for (let str of strs) {
        let count = new Array(26).fill(0);
                
        for (let char = 0; char < str.length; char++) {
            count[str.charCodeAt(char) - start.charCodeAt(0)]++;
        }
                
        // Join the array into a string but make sure to separate
        // each element with something because [1, 0, 11, 0] and
        // [10, 1, 1, 0] when using join will equal "10110".
        count = count.join('-');
         
        // Anagrams will have the same "count" strings so just add
        // count and str pair to hashmap.
        if (!result.has(count)) {
            result.set(count, [str])
        } else {
            let arr = result.get(count);
            arr.push(str);
            result.set(count, arr);
        }
    }
    
    // Place all the values, which are arrays, into an array
    return Array.from(result.values());
};