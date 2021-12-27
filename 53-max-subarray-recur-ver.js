/**
 * @param {number[]} nums
 * @return {number}
 */

// all credit to user mikobr for this
// https://leetcode.com/problems/maximum-subarray/discuss/1136682/Javascript-Divide-and-Conquer-(with-BONUS-pictures!)
var maxSubArray = function(nums) {
    return findMax(nums, 0, nums.length - 1)
};

var findMax = function (nums, l, r) {
    if (l == r) {
        //Base case, return num here
        return nums[l]
    }
    
    let mid = Math.floor((l + r)/2)
    let leftSum = findMax(nums, l, mid) //Recursively check left side for max sum
    let rightSum = findMax(nums, mid+1, r) //recursively check right side for max sum
    const crossingSum = findCrossingSum(nums, l, mid, r) //Find max sum that includes left and right side
    return Math.max (crossingSum, leftSum, rightSum) //return whichever is largest
}

var findCrossingSum = function(nums, l, mid, r) { 
    //A crossing sum exists on the left side and right side
    // so if we count mid as on the left side, the crossing sum MUST
    // include nums[mid] and nums[mid+1]. From these starting points we search for the max sum
    let sum=0
    let maxLSum = -Infinity
    for(let i = mid; i >= l; i--) {
        sum += nums[i]
        maxLSum = Math.max(maxLSum, sum)
    }
    sum =0
    let maxRSum = -Infinity
    for (let i = mid + 1; i <= r; i++) {
        sum += nums[i]
        maxRSum = Math.max(maxRSum, sum)
    }
    
    return maxRSum + maxLSum
}