// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 
 BF
 
 iterate through and create a hashset
 and while doing that maintain a max and min value
 
 the create another loop to iterate through the hashset
 start at min then increment up. if the number exists in
 hashset then the count for sequence increments by 1.
 loop through hashset from min to max.
 
 first iteration O(n)
 second iteration O(min of n to max of n) => O((10^9-(-10^9))n)
 
 let elements = new Set(),
 min = Number.MAX_SAFE_INTEGER,
 max = num[0]; 
 
 for (let i = 0; i < nums.length; i++) {
    if(!elements.has(nums[i])) {
        elements.add(nums[i]);
    } else if (max < nums[i]) {
        max = nums[i];
    } else if (min > nums[i]) {
        min = nums[i];
    }
 }
 
 let currCount = 0;
 let maxCount = 0;
 
 for (let i = min; i <= max; i++) {
    if (elements.has(i)) {
        currCount++;
        continue;
    }
    
    maxCount = Math.max(maxCount, currCount);
    currCount = 0;
 }
 
 return maxCount;
 
 */
 var longestConsecutive = function(nums) {
    let numsSet = new Set(nums),
        longest = 0;
    
    for (const n of numsSet) {
        if (!(numsSet.has(n-1))) {
            let length = 0;
            while (numsSet.has(n+length)) {
                length++;
                // console.log(length);
            }
            
            longest = Math.max(length, longest);
        }
    }
    
    return longest;
};