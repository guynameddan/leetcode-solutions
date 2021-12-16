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

// recursive version
var coinChange = function(coins, amount) {
    const hash = {};
        
    const recur = function(coins, amount) {
        if (amount in hash) return hash[amount];
        
        if (amount == 0) return 0;
        
        let result = Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] <= amount) {
                const temp = recur(coins, amount - coins[i]);
                
                if (temp >= 0) result = Math.min(result, temp + 1);
            }
        }

        hash[amount] = result;
        
        if (result != Number.MAX_SAFE_INTEGER) {
            return result;
        } else {            
            return -1;
        }

    }
    
    return recur(coins, amount);
};