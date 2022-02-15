/**
 * Element Swapping
Given a sequence of n integers arr, determine the lexicographically smallest sequence which may be obtained from it after performing at most k element swaps, each involving a pair of consecutive elements in the sequence.
Note: A list x is lexicographically smaller than a different equal-length list y if and only if, for the earliest index at which the two lists differ, x's element at that index is smaller than y's element at that index.
Signature
int[] findMinArray(int[] arr, int k)
Input
n is in the range [1, 1000].
Each element of arr is in the range [1, 1,000,000].
k is in the range [1, 1000].
Output
Return an array of n integers output, the lexicographically smallest sequence achievable after at most k swaps.
Example 1
n = 3
k = 2
arr = [5, 3, 1]
output = [1, 5, 3]
We can swap the 2nd and 3rd elements, followed by the 1st and 2nd elements, to end up with the sequence [1, 5, 3]. This is the lexicographically smallest sequence achievable after at most 2 swaps.
Example 2
n = 5
k = 3
arr = [8, 9, 11, 2, 1]
output = [2, 8, 9, 11, 1]
We can swap [11, 2], followed by [9, 2], then [8, 2].
 */
function findMinIdx(arr, start, k) {
    let min = Infinity,
        minIdx = 0;
    
    for (let i = start; i <= start + k; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIdx = i;
      }
    }
    
    return minIdx;
    
  }
  
  function swap(arr, start, end) {
    let temp = 0;
    
    for (let i = start; i > end; i--) {
      temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
  
  }
  
  function findMinArray(arr, k) {  
    if (k === 0) return arr;
    
    let minIdx = 0;
    
    for (let i = 0; i < arr.length && k > 0; i++) {
      minIdx = findMinIdx(arr, i, k);
      
      if (minIdx === i) continue;
      
      swap(arr, minIdx, i);
      
      k -= minIdx - i;
    }
    
    return arr;
    
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
  
  
  var n_1 = 3, k_1 = 2;
  var arr_1 = [5, 3, 1];
  var expected_1 = [1, 5, 3];
  var output_1 = findMinArray(arr_1, k_1);
  check(expected_1, output_1);
  
  var n_2 = 5, k_2 = 3;
  var arr_2 = [8, 9 ,11, 2, 1];
  var expected_2 = [2, 8, 9, 11, 1];
  var output_2 = findMinArray(arr_2, k_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  