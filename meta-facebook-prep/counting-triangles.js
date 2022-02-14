/**
 * Counting Triangles
Given a list of N triangles with integer side lengths, determine how many different triangles there are. Two triangles are considered to be the same if they can both be placed on the plane such that their vertices occupy exactly the same three points.
Signature
int countDistinctTriangles(ArrayList<Sides> arr)
or 
int countDistinctTrianges(int[][] arr)
Input
In some languages, arr is an Nx3 array where arr[i] is a length-3 array that contains the side lengths of the ith triangle. In other languages, arr is a list of structs/objects that each represent a single triangle with side lengths a, b, and c.
It's guaranteed that all triplets of side lengths represent real triangles.
All side lengths are in the range [1, 1,000,000,000]
1 <= N <= 1,000,000
Output
Return the number of distinct triangles in the list.
Example 1
arr = [[2, 2, 3], [3, 2, 2], [2, 5, 6]]
output = 2
The first two triangles are the same, so there are only 2 distinct triangles.
Example 2
arr = [[8, 4, 6], [100, 101, 102], [84, 93, 173]]
output = 3
All of these triangles are distinct.
Example 3
arr = [[5, 8, 9], [5, 9, 8], [9, 5, 8], [9, 8, 5], [8, 9, 5], [8, 5, 9]]
output = 1
All of these triangles are the same.
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
  
  function countDistinctTriangles(arr) {
    let triangles = new Set();
    
    // Because each array will always be length 3 (a triangle)
    // the sorting time complexity would be 3log3 or O(1) for
    // each array. Since we're doing this N number of times the
    // total time complexity is O(N)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = mergeSort(arr[i]).toString();
    }
      
    for (let j = 0; j < arr.length; j++) {
      if (!triangles.has(arr[j])) triangles.add(arr[j]);
    }
    
    return triangles.size;
  }
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printInteger(n) {
    var out = '[' + n + ']';
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
      out += printInteger(expected);
      out += ' Your output: ';
      out += printInteger(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var arr_1 = [[7, 6, 5], [5, 7, 6], [8, 2, 9], [2, 3, 4], [2, 4, 3]];
  var expected_1 = 3;
  var output_1 = countDistinctTriangles(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [[3, 4, 5], [8, 8, 9], [7, 7, 7]];
  var expected_2 = 3;
  var output_2 = countDistinctTriangles(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  