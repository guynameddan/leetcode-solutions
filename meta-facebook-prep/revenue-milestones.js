/**
 * Revenue Milestones
We keep track of the revenue Facebook makes every day, and we want to know on what days Facebook hits certain revenue milestones. Given an array of the revenue on each day, and an array of milestones Facebook wants to reach, return an array containing the days on which Facebook reached every milestone.
Signature
int[] getMilestoneDays(int[] revenues, int[] milestones)
Input
revenues is a length-N array representing how much revenue FB made on each day (from day 1 to day N). milestones is a length-K array of total revenue milestones.
Output
Return a length-K array where K_i is the day on which FB first had milestones[i] total revenue. If the milestone is never met, return -1.
Example
revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
milestones = [100, 200, 500]
output = [4, 6, 10]
Explanation
On days 4, 5, and 6, FB has total revenue of $100, $150, and $210 respectively. Day 6 is the first time that FB has >= $200 of total revenue.
 */
// because exact values won't always be found the successor
// variable exists. It'll keep track of the revenue total that's
// the smallest value that is greater than or equal to the milestone
function binSearch(arr, left, right, successor, target) {
    while (right >= left) {
      let mid = left + Math.floor((right - left) / 2);
      
      if (arr[mid] === target) return mid + 1;
      
      if (arr[mid] > target) return binSearch(arr, left, mid - 1, mid, target);
      
      return binSearch(arr, mid + 1, right, mid, target);
    }
    
    return successor + 1;
  }
  
  function getMilestoneDays(revenues, milestones) {
    let totals = [],
        sum = 0,
        result = [];
    
    // O(revenues.length)
    for (let i = 0; i < revenues.length; i++) {
      sum += revenues[i];
      totals.push(sum);
    }
    
    // O(milestones.length * log(revenues.length))
    for (let j = 0; j < milestones.length; j++) {
      result.push(binSearch(totals, 0, totals.length - 1, 0, milestones[j]));
    }
    
    return result;
  }
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
      if (i !== 0) {
        res += ', ';
      }
      res += array[i];
    }
    res += ']';
    return res;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
      result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
      result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printintegerArray(expected);
      out += ' Your output: ';
      out += printintegerArray(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var revenues_1 = [100, 200, 300, 400, 500];
  var milestones_1 = [300, 800, 1000, 1400]
  var expected_1 = [2, 4, 4, 5];
  var output_1 = getMilestoneDays(revenues_1, milestones_1);
  check(expected_1, output_1);
  
  var revenues_2 = [700, 800, 600, 400, 600, 700];
  var milestones_2 = [3100, 2200, 800, 2100, 1000];
  var expected_2 = [5, 4, 2, 3, 2];
  var output_2 = getMilestoneDays(revenues_2, milestones_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  