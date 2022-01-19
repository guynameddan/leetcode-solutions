// https://leetcode.com/problems/jump-game/submissions/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    // dp method
    
    let dp = new Array(nums.length).fill(false);
    dp[0] = true;
    
    for (let curSpot = 0; curSpot < nums.length; curSpot++) {
        if (dp[curSpot]) {
            for (let jump = 1; jump <= nums[curSpot]; jump++) {
                dp[curSpot + jump] = true;
            }
        }
    }
    
    return dp[nums.length - 1];
};