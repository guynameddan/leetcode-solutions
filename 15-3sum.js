// https://leetcode.com/problems/3sum/
/**
 * @param {number[]} nums
 * @return {number[][]}
 
 BF
 
 [-1,0,1,2,-1,-4] target = 0
 
 sort array first
 
 for () {
    for () {
        for() {
        
        }
    
    }
 }
 
 nums1, nums2, nums3
 
 O(n^3)
 
 Efficient method:
 
 sort array first
 [ -1, -1, -4, 0, 1, 2 ]
 
 two pointers
 left  = left side of arr
 right = right side of arr
 
 left + right = target ?
 
 if yes, return left and right
 if >, move the right down
 if <, move the left up
 
 go through each element of array then call on 2sum function to find the total sum of 0
 
 time complexity: O(nlogn) for sorting and O(n) for 3sum but times O(n) due to 2sum method. So O(n^2) + O(nlogn) which is just O(n^2)
 
 space complexity: O(n) for sort and O(1) for the 3sum and 2sum because handful of variables used. therefore O(n)
 */
 var threeSum = function(nums) {
    // if array is less than 3 just return empty arr
    if (nums.length < 3) return [];
    
    nums.sort((a,b) => a - b)
    
    let output = [];
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1,
            right = nums.length - 1,
            firstVal = nums[i];
        
        if (i > 0 && firstVal == nums[i-1]) {
            continue;
        }
        
        while (left < right){
            let sum = firstVal + nums[left] + nums[right];
            
            if (sum === 0) {
                output.push([firstVal, nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }

        }
    }
    
    return output;
};