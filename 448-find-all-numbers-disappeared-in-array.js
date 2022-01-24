// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Time O(n)
 * Space O(n)
 */
 var findDisappearedNumbers = function(nums) {
    let numsSet = new Set(),
        result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!numsSet.has(nums[i])) numsSet.add(nums[i]);
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) result.push(i);
    }
    
    return result;
};

/**
 * Time O(n)
 * Space O(1)
 * 
 * iterate through nums and use the elements as
 * indices. But since the range of numbers is [1,n]
 * subtract 1 from the element first then use it as
 * the index. Then change the element of that index
 * into a negative number. Any of the numbers that
 * are not negative will be the missing numbers. Once
 * that element is found just add 1 and push to result
 * array.
 */
 var findDisappearedNumbers = function(nums) {
    let i = 0,
        res = [];
    
    for (let num of nums) {
        i = Math.abs(num) - 1;
        nums[i] = -1 * Math.abs(nums[i]);
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1);
    }
    
    return res;
};