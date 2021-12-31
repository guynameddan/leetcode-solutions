https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0,
        right = nums.length - 1,
        min = nums[0],
        mid = 0;
    
    while (left <= right) {
        if (nums[left] < nums[right]) {
            min = Math.min(min, nums[left]);
        }
        
        mid = Math.floor((left + right) / 2);
        
        min = Math.min(min, nums[mid]);
        
        if (nums[mid] >= nums[left]) left = mid + 1;
        else right = mid - 1;
    }
    
    return min;
};