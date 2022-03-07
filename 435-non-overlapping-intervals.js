// https://leetcode.com/problems/non-overlapping-intervals/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    let prevEnd = intervals[0][1],
        count = 0;
    
    for (let i = 1; i < intervals.length; i++) {
        let currStart = intervals[i][0],
            currEnd = intervals[i][1];
        
        if (prevEnd > currStart) {
            count++;
            prevEnd = Math.min(prevEnd, currEnd);
        } else {
            prevEnd = currEnd;
        }
    }
    
    return count;
};