// https://leetcode.com/problems/append-k-integers-with-minimal-sum/
/**
    This one required a litte more thought than I initially thought. My original answer was to make a hash set from array
    and then start from i = 1 and then add any missing i to a sum. This caused a TLE (Time Limit Exceeded) error. Remember this
    wouldn't be O(N) because the nums array isn't the only thing being checked. The sum could require numbers greater than the
    max of nums.
    
    I thought using the gauss sum had something to do with the solution but ran out of time.
    
    Use gauss sum to figure out the MINIMUM sum possible. Then go through only UNIQUE numbers in nums array. For every number less
    than or equal k in the array you must subtract that number from the current sum. This is because
    the minimum sum possible cannot have that number in it anymore since the number already exists. To correct this you must
    add k + 1 to the sum and change the comparison/if-statement by also incrementing k.
    
    Since we only care about the minimum sum, we don't have to care about any numbers in the array that are greater than k.
    
    Sorting the array costs O(NLogN) and is the most expensive part of solution. Therefore, the overall time complexity is
    O(NLogN)
    
    Question can also be found by using binary search:
    https://leetcode.com/problems/append-k-integers-with-minimal-sum/discuss/1823621/Python-Explanation-with-pictures
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var minimalKSum = function(nums, k) {
    // gauss sum
    let sum = k * (k + 1) / 2;
    
    // O(NlogN)
    nums = Array.from(new Set(nums)).sort((a,b) => a - b);

    // O(N)
    for (let num of nums) {
        if (num <= k) {
            sum += (++k) - num; 
        }
    }
    
    return sum;
};