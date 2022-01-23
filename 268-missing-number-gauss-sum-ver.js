// https://leetcode.com/problems/missing-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sum = 0,
        n = nums.length,
    gaussSum = (n*(n+1))/2;
    
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    
    return gaussSum - sum;
};