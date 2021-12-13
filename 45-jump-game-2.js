/**
 * @param {number[]} nums
 * @return {number}
 */
//  Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

//  Each element in the array represents your maximum jump length at that position.
 
//  Your goal is to reach the last index in the minimum number of jumps.
 
//  You can assume that you can always reach the last index.
 
  
 
//  Example 1:
 
//  Input: nums = [2,3,1,1,4]
//  Output: 2
//  Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.


// Greedy Method
// Consider ranges with pointers, newMax and oldMax, the end and beginning pointers of a range, respectively.
// Loops through each index until the end to find the largest jump possible between newMax and i + nums[i].
// Whenever newMax updates it's the end of the new range
// Whenever oldMax updates it's the start of the new range
// For Example:
// [2,       3,   1,        1,     4]
// |__|      |____|         |______|
//  old          new
//  
// then:
//               new
//               old               
// then:
//                old              new
// then:
//                                 new
//                                 old
var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i = 0;i < nums.length - 1;i++) {
        // Keep track of the farthest jump
        newMax = Math.max(newMax, i + nums[i]);
        // When we get to the index where we had our previous farthest jump, we increase our jump count by 1
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
 }