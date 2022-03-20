// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var countHillValley = function(nums) {
    if (nums.length < 1 || !nums) return 0;
    
    let left = nums[0],
        count = 0;
    
    for (let i = 1; i < nums.length - 1; i++) {
        if ((nums[i] < left && nums[i] < nums[i + 1]) ||
           (nums[i] > left && nums[i] > nums[i + 1])) {
            count++;
            left = nums[i];
        } else if (nums[i] === left) {
            continue;
        } else if (nums[i] === nums[i+1]) {
            let center = nums[i];
            
            while(nums[i] === nums[i+1]) {
                i++;
            }
            
            if ((center < left && center < nums[i + 1]) ||
               center > left && center > nums[i + 1]) {
                count++;
                left = nums[i];
            } else {
                continue;
            }
        }
    }
    
    return count;
    
};