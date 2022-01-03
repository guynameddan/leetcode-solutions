// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

// Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

// In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

// Implement an efficient solution and analyze its time and space complexities.

// Examples:

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: [] # since there is no common slot whose duration is 12

/* 
Brute Force Solution 
*/
function meetingPlanner(slotsA, slotsB, dur) {
    let lateStart = 0,
        earliestEnd = 0;
    
    for (let i = 0; i < slotsA.length; i++) {
      for (let j = 0; j < slotsB.length; j++) {      
        
        lateStart = Math.max(slotsA[i][0], slotsB[j][0]);
          
        earliestEnd = Math.min(slotsA[i][1], slotsB[j][1]);
        
        if (earliestEnd - lateStart >= dur) {
          
          return [lateStart, lateStart + dur];
        }
      }
    }
    
    return [];
  }
/* 
  Efficient Solution

  explanation: we don't have to iterate through each time slot over and over
  because the list of arrays is ordered. Since it's ordered we know earlier
  time slots wont give us more overlap so we can always look forward for a
  larger overlap
*/

function meetingPlanner(slotsA, slotsB, dur) {
    let ptrA = 0,
        ptrB = 0;
    
    while (ptrA < slotsA.length && ptrB < slotsB.length) {
      let lateStart = Math.max(slotsA[ptrA][0], slotsB[ptrB][0]),
            
        earliestEnd = Math.min(slotsA[ptrA][1], slotsB[ptrB][1]);
      
      if (earliestEnd - lateStart >= dur) {
        return [lateStart, lateStart + dur];
      }
      
      if (slotsA[ptrA][1] < slotsB[ptrB][1]) ptrA++;
      else ptrB++;
    }
    
    return [];
  }