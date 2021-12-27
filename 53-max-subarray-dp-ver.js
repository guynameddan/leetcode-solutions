// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER,
        tempMax = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        // tempMax finds the max between the sum of the subarray
        // and the current number we're looking at. If the current
        // number is greater, then we forget about the subarray and
        // only keep the current number.
        tempMax = Math.max(tempMax + nums[i], nums[i]);
        
        // max finds the max of the previous max and the current max
        max = Math.max(tempMax, max);
    }
    
    return max;
};