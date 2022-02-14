/**
 * 1 Billion Users
We have N different apps with different user growth rates. At a given time t, measured in days, the number of users using an app is g^t (for simplicity we'll allow fractional users), where g is the growth rate for that app. These apps will all be launched at the same time and no user ever uses more than one of the apps. We want to know how many total users there are when you add together the number of users from each app.
After how many full days will we have 1 billion total users across the N apps?
Signature
int getBillionUsersDay(float[] growthRates)
Input
1.0 < growthRate < 2.0 for all growth rates
1 <= N <= 1,000
Output
Return the number of full days it will take before we have a total of 1 billion users across all N apps.
Example 1
growthRates = [1.5]
output = 52
Example 2
growthRates = [1.1, 1.2, 1.3]
output = 79
Example 3
growthRates = [1.01, 1.02]
output = 1047
 */
function binSearch(arr, left, right, target, successor) {  
    while (right >= left) {
      if (totalUsers(arr, right) < target)  return binSearch(arr, right + 1, right * 2, target, successor);
      
      let mid = left + Math.floor((right - left) / 2),
          users = totalUsers(arr, mid);
      
      if (users === target) return mid;
      
      if (users > target) return binSearch(arr, left, mid - 1, target, mid);
      
      return binSearch(arr, mid + 1, right, target, mid);
    }
    
    return successor;
  }
  
  function totalUsers(arr, days) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++) {
      total += arr[i] ** days;
    }
    
    return total;
  }
  
  function getBillionUsersDay(growthRates) {
  
    return binSearch(growthRates, 0, 100, 1e9, 0);
    
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
  
  var test_1 = [1.1, 1.2, 1.3];
  var expected_1 = 79;
  var output_1 = getBillionUsersDay(test_1);
  check(expected_1, output_1);
  
  var test_2 = [1.01, 1.02];
  var expected_2 = 1047;
  var output_2 = getBillionUsersDay(test_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  