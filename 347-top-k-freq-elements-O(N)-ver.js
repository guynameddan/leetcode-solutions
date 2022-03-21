// https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    // Time complexity: O(N)
    
    let count = new Map(),
        freq = new Array(nums.length + 1).fill(0).map(() => new Array()),
        result = [];
    
    // Create and fill a hashmap of the count of each int in nums.
    for (let num of nums) {
        if (!count.has(num)) {
            count.set(num, 1);
        } else {
            let amt = count.get(num) + 1;
            count.set(num, amt);
        }
    }
    
    // Fill an array such that the indices are the counts and the elements
    // are arrays of all the numbers with that count.
    for (let [num, c] of count) {
        freq[c].push(num);
    }
    
    // Now just go backwards and fill up the result array until the array
    // is of length k.
    for (let i = freq.length - 1; i >= 0; i--) {
        for (let num of freq[i]) {
            result.push(num);
            
            if (result.length === k) return result;
        }
    }
    
};