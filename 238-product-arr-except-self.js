// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let result = [],
        pre = 1,
        post = 1;
    
    for (let i = 0; i < nums.length; i++) {
        result.push(pre);
        pre *= nums[i];
    }
    
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= post;
        post *= nums[j];
    }
    
    return result;
};