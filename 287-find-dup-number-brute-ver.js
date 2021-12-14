/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

//  There is only one repeated number in nums, return this repeated number.
 
//  You must solve the problem without modifying the array nums and uses only constant extra space.
 
  
 
//  Example 1:
 
//  Input: nums = [1,3,4,2,2]
//  Output: 2

 var findDuplicate = function(nums) {
    
    // inefficient method
    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        
        for (let j = i + 1; j < nums.length; j++) {
            let second = nums[j];
            
            if (first == second) {
                return first;
            }
            
        }
    }
};