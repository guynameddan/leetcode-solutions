// https://leetcode.com/problems/kth-largest-element-in-an-array/solution/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    k = nums.length - k;
    
    return quickSelect(0, nums.length - 1, nums, k);
};

function quickSelect(left, right, nums, k) {
    let [pivot, ptr] = [nums[right], left];
    
    for (let i = left; i < right; i++) {
        if (nums[i] <= pivot) {
            [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
            ptr++;
        }
    }
    
    // REMEMBER: This swap is what helps get the initial pivot,
    // nums[right], to the correct position in the array. Neither
    // side of the pivot may be sorted but, we know for sure that
    // when this swap occurs, the pivot is where it should be if
    // the array were sorted from least to greatest.
    [nums[ptr], nums[right]] = [nums[right], nums[ptr]]
    
    // The checks below are just asking "Hey, is the element at
    // the pivot the (N-k) smallest?". If the element is smaller,
    // then work recursively on the left. If higher, work on the
    // right.
    if (ptr > k) return quickSelect(left, ptr - 1, nums, k);
    else if (ptr < k) return quickSelect(ptr + 1, right, nums, k);
    else return nums[ptr];
}