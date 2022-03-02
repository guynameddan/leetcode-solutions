// https://leetcode.com/problems/insert-interval/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    result = [];
    
    // Check to see if there's any nonoverlap first.
    // (1) If the new interval's end is less than interval's current element's start,
    // since intervals is sorted, the solution is just newInterval and the rest of
    // intervals in that order
    // (2) If the new interval's start is greater than the end of
    // interval's current element's end, then interval can be appended to the result
    // array
    // (3) If neither conditions are met then we know the two intervals are overlapping.
    // newInterval will then be [min start of both, max end of both]
    for (let i = 0; i < intervals.length; i++) {
        
        if (newInterval[1] < intervals[i][0]) { // condition (1)
            result.push(newInterval);
            return result = [...result, ...intervals.slice(i)];
        } else if (newInterval[0] > intervals[i][1]) { // condition (2)
            result.push(intervals[i]);
        } else { // condition (3)
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }
    
    result.push(newInterval);
    
    return result;
};