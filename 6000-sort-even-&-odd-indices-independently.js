/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortEvenOdd = function(nums) {
    let temp = 0;
    
    if (nums.length < 3) return nums;
    
    for (let i = 2; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (nums[i] < nums[i - 2]) {
                temp = nums[i];
                nums[i] = nums[i - 2];
                nums[i - 2] =  temp;
            }
        } else {
            if (nums[i] > nums[i - 2]) {
                temp = nums[i];
                nums[i] = nums[i - 2];
                nums[i - 2] =  temp;
            }
        }
    }
    
    return nums;
};