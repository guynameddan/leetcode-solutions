// https://leetcode.com/problems/buildings-with-an-ocean-view/solution/
/**
 * @param {number[]} heights
 * @return {number[]}
 */
 var findBuildings = function(heights) {
    let stack = [0];
    
    for (let i = 1; i < heights.length; i++) {
        let top = stack[stack.length - 1];
        
        while (stack.length !== 0 && heights[top] <= heights[i]) {
            stack.pop();
            top = stack[stack.length - 1];
        }
        
        stack.push(i);
    }
    
    return stack;
};