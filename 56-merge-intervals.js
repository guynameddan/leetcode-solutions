/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

//  Example 1:
 
    //  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    //  Output: [[1,6],[8,10],[15,18]]
    //  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

//  Example 2:
 
    //  Input: intervals = [[1,4],[4,5]]
    //  Output: [[1,5]]
    //  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
  
 
//  Constraints:
 
    //  1 <= intervals.length <= 104
    //  intervals[i].length == 2
    //  0 <= starti <= endi <= 104

 var merge = function(intervals) {
    intervals.sort(function(a,b){return a[0] - b[0]})
    
    let output = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        
        let lastEnd = output[output.length - 1][1];
        
        if (start <= lastEnd) {
            output[output.length - 1][1] = Math.max(lastEnd, end);
        } else {
            output.push([start, end]);
        }
    }
    
    return output;
};