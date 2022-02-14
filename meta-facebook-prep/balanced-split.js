/**
 * Balanced Split
Given an array of integers (which may include repeated integers), determine if there's a way to split the array into two subsequences A and B such that the sum of the integers in both arrays is the same, and all of the integers in A are strictly smaller than all of the integers in B.
Note: Strictly smaller denotes that every integer in A must be less than, and not equal to, every integer in B.
Signature
bool balancedSplitExists(int[] arr)
Input
All integers in array are in the range [0, 1,000,000,000].
Output
Return true if such a split is possible, and false otherwise.
Example 1
arr = [1, 5, 7, 1]
output = true
We can split the array into A = [1, 1, 5] and B = [7].
Example 2
arr = [12, 7, 6, 7, 6]
output = false
We can't split the array into A = [6, 6, 7] and B = [7, 12] since this doesn't satisfy the requirement that all integers in A are smaller than all integers in B.
 */
function merge(left, right) {
    let arr = [];
    
    while (left.length && right.length) {
      if (left[0] < right[0]) arr.push(left.shift());
      else arr.push(right.shift());
    }
    
    return [...arr, ...left, ...right];
  }
  
function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let half = Math.floor(arr.length / 2),  
        left = arr.splice(0, half);

    return merge(mergeSort(left), mergeSort(arr));
}
  
function balancedSplitExists(arr) {
    let sumA = 0,
        sumB = 0,
        arrB = [],
        max = 0,
        numsA = new Map(),
        numsB = new Map(),
        count = 0;
        
    // O(nlogn)
    // arr.sort((a,b) => a-b);

    // using mergeSort
    // O(nlogn)
    arr = mergeSort(arr);
    
    for (let i = 0; i < arr.length; i++) {
      if (!numsA.has(arr[i])) {
        numsA.set(arr[i], 1);
      } else {
        count = numsA.get(arr[i]);
        numsA.set(arr[i], ++count);
      }
      
      sumA += arr[i];
    }
    
    // O(n)
    while (arr.length > 0) {
      
      max = arr.shift();
      
      sumA -= max;
      sumB += max;
      
      if (!numsB.has(max)) {
        numsB.set(max, 1);
      } else {
        count = numsB.get(max);
        numsB.set(max, ++count);
      }
      
      count = numsA.get(max);
      numsA.set(max,--count);
      
      if (sumA === sumB && numsA.get(max) === 0) return true
      
    }
    
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
  
  var arr_1 = [2, 1, 2, 5];
  var expected_1 = true;
  var output_1 = balancedSplitExists(arr_1); 
  check(expected_1, output_1); 
  
  var arr_2 = [3, 6, 3, 4, 4];
  var expected_2 = false;
  var output_2 = balancedSplitExists(arr_2); 
  check(expected_2, output_2); 
  
  // Add your own test cases here
  