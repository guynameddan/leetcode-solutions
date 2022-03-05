// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
 var mostFrequent = function(nums, key) {
    let targetHash = new Map(),
        count = 0,
        max = 0,
        result = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] === key) {
            if (!targetHash.has(nums[i])) {
                targetHash.set(nums[i], 1);
            } else {
                count = targetHash.get(nums[i]);
                targetHash.set(nums[i], ++count);
            }
        }
    }
    
    for (let [key, value] of targetHash) {
        if (value > max) {
            max = value;
            result = key;
        }
    }
    
    return result;
};