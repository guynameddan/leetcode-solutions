// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let memo = new Array(n+1);
    memo[0] = 0;
    
    function recur(target, memo) {
        if (target < 0) return 0;
        if (memo[target]) return memo[target];
        if (target == 0) return 1;
        
        let ways = 0;
        
        ways += recur(target - 1, memo);
        ways += recur(target - 2, memo);
        
        memo[target] = ways;
        
        return ways;
    }
    
    return recur(n, memo);
};