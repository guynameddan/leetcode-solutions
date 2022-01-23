// https://leetcode.com/problems/missing-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}

a ^ a = 0
a ^ b ^ b = a
the missing number will not have a pair to cancel it out
 */
 var missingNumber = function(nums) {
    let result = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    
    return result;
};