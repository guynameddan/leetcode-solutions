/*
Bob loves cakes and wants to eat 2 each day. He loves them so much that he has found all the
Patisseries and Bakeries in his area that sell cakes and marked down, in a list, the exact 
time that they put their freshly baked cakes for sale every day. 
Bob wants to order only 1 cake from each shop but he also wants to minimize 
the time between his two cake purchases, given Bob's list that includes the time each shop starts 
selling their cakes each day, find the minimum time (in minutes) in which Bob can buy 2 cakes.

Example 1: ["10:00", 15:32, 11:41] answer = 101 minutes 
(the time difference between 10:00 and 11:41).

Example 2: [10:00, 15:32, 00:04, 11:41, 23:15] 
answer = 49 minutes (the time difference between 23:15 and 00:04).
*/

// times  = string

// console.log('hello')

function minTime(timeArray) {
  timeArray.sort();
  
  var minDiff = [];
  var minutes = new Array(timeArray.length);
  
  var hr = 0,
      mins = 0;
  
  for (var = i; i < timeArray.length; i++) {
      hr = Number.(timeArray[i].slice(0,2));
      mins = Number.(timeArray[i].slice(3,5));
      mins += (hr * 60);
      
      minutes.push(mins);
  }
  
  for (var k = 1; k < minutes.length; k++) {
    minDiff.push(minutes[k] - minutes[k-1]);
  }
  
  minDiff.push(minutes[minutes.length - 1] % (24 * 60) + minutes[0]);  
  
  return Math.min(minDiff);
}

timeArr = ["10:00", "15:32", "11:41"];

minTime(timeArr);