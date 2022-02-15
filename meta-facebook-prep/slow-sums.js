function merge(left, right) {
    let arr = [];
    
    while (left.length && right.length) {
      if (left[0] > right[0]) arr.push(left.shift());
      else arr.push(right.shift());
    }
    
    return [...arr, ...left, ...right];
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) return arr;
    
    let mid = Math.floor(arr.length / 2),
        left = arr.splice(0, mid);
    
    return merge(mergeSort(left), mergeSort(arr));
  }
  
  // sort method -> O(NlogN)
  // iterating through sorted array -> O(N)
  // total time complexity O(NLogN)
  function getTotalTime(arr) {
    let penalties = 0,
        tempSum = 0;
    
    arr = mergeSort(arr);
    
    tempSum = arr[0];
    
    console.log(arr);
    
    for (let i = 1; i < arr.length; i++) {
      tempSum += arr[i];
      penalties += tempSum;
    }
    
    return penalties;
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
  
  var arr_1 = [4, 2, 1, 3];
  var expected_1 = 26;
  var output_1 = getTotalTime(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [2, 3, 9, 8, 4];
  var expected_2 = 88;
  var output_2 = getTotalTime(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  