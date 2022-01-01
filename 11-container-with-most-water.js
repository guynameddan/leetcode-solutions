/**
 * @param {number[]} height
 * @return {number}
 
 have 2 pointers, left and right
  
  l
 [1,8,6,2,5,4,8,3,7]
    r
 
 area = len X wid
 
 len = right - left
 wid = min of height[right] and height[left]
 
 BF:
 
 iterate through heights and find every single area and compare every time
 
 for (i) {
    height[i]
    for (j = i+1) {
        area = min of height[j] and height[i] X (j - i)
        maxArea = max between area and previous maxArea
    }
 }
 
 Efficient sol'n:
 
 we know max width is between idx = 0 and idx = length of heights
 
    l
 [1,8,6,2,5,4,8,3,7]
      r
    
try to maximize area by getting a higher height while changing the length
 */
var maxArea = function(height) {
    let left = 0,
        right = height.length - 1,
        max = 0;
    
    while (left < right) {
        let width = right - left,        
            minHeight = Math.min(height[right], height[left]),        
            area= width * minHeight;
        
        max = Math.max(max, area);
        
        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};