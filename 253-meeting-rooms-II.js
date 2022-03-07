// https://leetcode.com/problems/meeting-rooms-ii/
// https://www.lintcode.com/problem/919/
import {
    Interval,
  } from '/opt/node/lib/lintcode/index.js';
  
  /**
   * Definition of Interval:
   * class Interval {
   *   constructor(start, end) {
   *     this.start = start;
   *     this.end = end;
   *   }
   * }
   */
  
  export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: the minimum number of conference rooms required
     */

    /**
     * You need to know the min number of rooms required for all meetings. Another way to think
     * of it is "What's the most amount of rooms required from the first interval to the last?".
     * 
     * Sol'n: Split the intervals array into start and end times and then sort both in ascending
     * order. Traverse through each one. Compare the current start and current end. If the start
     * is less than end, that means a meeting is currently happening so increment the count. If
     * the end is less than the start, that means a meeting has just ended so decrement count.
     * 
     * Think of the count as "how many meetings are currently going on now?"
     * 
     * return the max that the count has ever been.
     */
    minMeetingRooms(intervals) {
      let starts = intervals.sort((a, b) => a.start - b.start).map(a => a = a.start),
        ends = intervals.sort((a,b) => a.end - b.end).map(a => a = a.end),
      [result, count, start, end] = [0, 0, 0, 0];
  
      while (start < intervals.length) {
        if (starts[start] < ends[end]) {
            start++;
            count++;
        } else {
            end++;
            count--;
        }
  
        result = Math.max(result, count);
      }
  
      return result;
    }
  }