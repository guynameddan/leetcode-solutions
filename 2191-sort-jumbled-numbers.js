// https://leetcode.com/problems/sort-the-jumbled-numbers/
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortJumbled = function(mapping, nums) {
    let mappedNums = [],
        result = [],
        current;
    
    // O(N)
    for (let i = 0; i < nums.length; i++) {
        current = Array.from(nums[i].toString()).map(Number);
        
        current = Number(current.map(x => mapping[x]).join(""));
        
        mappedNums.push([current, nums[i]]);
    }
    
    // O(NlogN)
    mappedNums.sort((a, b) => a[0] - b[0]);
    
    // O(N)
    result = mappedNums.map(x => x[1]);
        
    return result;
};