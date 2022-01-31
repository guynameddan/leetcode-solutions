/**
 * Reverse to Make Equal
Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
Signature
bool areTheyEqual(int[] arr_a, int[] arr_b)
Input
All integers in array are in the range [0, 1,000,000,000].
Output
Return true if B can be made equal to A, return false otherwise.
Example
A = [1, 2, 3, 4]
B = [1, 4, 3, 2]
output = true
After reversing the subarray of B from indices 1 to 3, array B will equal array A.
 */
// Add any extra import statements you may need here


// Add any helper functions you may need here


function areTheyEqual(array_a, array_b){
    let count = array_a.length,
        numMap = new Map();
    
    for (let i = 0; i < count; i++) {
      if (numMap[array_a[i]]) numMap[array_a]++;
      else numMap[array_a[i]] = 1;
    }
    
    for (let num of array_b) {
      if (numMap[num]) {
        numMap[num]--;
        count--;
      }
    }
    
    if (count === 0) return true;
    
    return false;
  }
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var array_a_1 = [1, 2, 3, 4];
  var array_b_1 = [1, 4, 3, 2];
  var expected_1 = true;
  var output_1 = areTheyEqual(array_a_1, array_b_1); 
  check(expected_1, output_1); 
  
  var array_a_2 = [1, 2, 3, 4];
  var array_b_2 = [1, 4, 3, 3];
  var expected_2 = false;
  var output_2 = areTheyEqual(array_a_2, array_b_2); 
  check(expected_2, output_2); 
  
  // Add your own test cases here
  