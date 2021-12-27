// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let numHash = new Map(),
        diff = 0;
    
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        
        if (numHash.has(diff)) {
            return [numHash.get(diff), i];
        } else {
            numHash.set(nums[i], i);
        }
    }
};