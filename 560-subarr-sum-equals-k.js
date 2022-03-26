// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let count = 0,
        sum = 0,
        sumCounts = new Map();
    
    // key->value
    // current sum -> occurence of sum
    sumCounts.set(sum, 1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (sumCounts.has(sum - k)) {
            count += sumCounts.get(sum - k);
        }
        
        if (!sumCounts.has(sum)) {
            sumCounts.set(sum, 1);
        } else {
            let count = sumCounts.get(sum) + 1;
            sumCounts.set(sum, count);
        }
    }
    
    return count;
};