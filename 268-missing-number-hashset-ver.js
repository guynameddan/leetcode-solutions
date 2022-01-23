/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let numSet =  new Set(),
        max = 0,
        n = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        numSet.add(nums[i]);
        
        if (nums[i] > max) max = nums[i];
    }
    
    for (let i = 0; i < max; i++) {
        if (!numSet.has(i)) return i;
    }
    
    return n;
};