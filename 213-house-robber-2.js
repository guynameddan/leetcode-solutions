// https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    
    let noLast = nums.slice(0, nums.length-1),
        noFirst = nums.slice(1, nums.length);
    
    return Math.max(letsGoRobbin(noFirst), letsGoRobbin(noLast));
};

function letsGoRobbin(nums) {
    let dp = new Array(nums.length);
    
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    // think of this as "what has more? robbing the
    // current house and the max of robbing any houses
    // from 2 houses ago or robbing only the max of the
    // houses up to the previous house?"
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    
    return dp[nums.length-1];
}