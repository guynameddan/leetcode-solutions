// https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    
    const LIS = new Array(nums.length).fill(1);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }
    
    console.log(LIS);
    
    return Math.max(...LIS);
    
};