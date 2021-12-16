/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

//  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

//  Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 
//  You may assume that you have an infinite number of each kind of coin.
 
  
 
//  Example 1:
 
//     Input: coins = [1,2,5], amount = 11
//     Output: 3
//     Explanation: 11 = 5 + 5 + 1

// dynamic programming version
 var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    
    // console.log(dp);
    
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
        }
    }
    
    console.log(dp);
    
    if (dp[amount] != amount + 1) {
        return dp[amount];
    } else {
        return -1;
    }
}