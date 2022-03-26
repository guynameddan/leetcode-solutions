// https://leetcode.com/problems/buildings-with-an-ocean-view/solution/
/**
 * @param {number[]} heights
 * @return {number[]}
 */
 var findBuildings = function(heights) {
    if (heights.length === 1) return [0];
    if (heights.length < 1) return heights;
    
    let max = heights[heights.length - 1],
        result = [heights.length - 1];
    
    for (let i = heights.length - 2; i >= 0; i--) {
        if (heights[i] > max) {
            result.push(i);
            max = heights[i];
        }
    }
    
    return result.reverse();    
};