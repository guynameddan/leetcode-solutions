// https://leetcode.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    let memo = new Map();
    
    memo.set(0, 1);
        
    for (let i = 1; i <= target; i++) {
        memo.set(i, 0);
        
        for (let num of nums) {
            if (i - num >= 0) {
                memo.set(i, memo.get(i) + memo.get(i - num));
            }
        }
    }
        
    return memo.get(target);
}

// or with an array
var combinationSum4 = function(nums, target) {
    let memo = new Array(target + 1).fill(0);
    
    memo[0] = 1;
        
    for (let i = 1; i <= target; i++) {        
        for (let num of nums) {
            if (i - num >= 0) {
                memo[i] = memo[i] + memo[i-num];
            }
        }
    }
        
    return memo[target];
}