// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let curmax = 1,
        curmin = 1,
        globalMax = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curmax = 1;
            curmin = 1;
        }
        
        let tmp = curmax * nums[i];
        curmax = Math.max(curmax * nums[i], curmin * nums[i], nums[i]);
        curmin = Math.min(tmp, curmin * nums[i], nums[i]);
        
        globalMax = Math.max(globalMax, curmax);
    }
    
    return globalMax;
};