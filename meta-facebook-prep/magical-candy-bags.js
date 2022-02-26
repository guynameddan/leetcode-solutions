/**
 * Magical Candy Bags
You have N bags of candy. The ith bag contains arr[i] pieces of candy, and each of the bags is magical!
It takes you 1 minute to eat all of the pieces of candy in a bag (irrespective of how many pieces of candy are inside), and as soon as you finish, the bag mysteriously refills. If there were x pieces of candy in the bag at the beginning of the minute, then after you've finished you'll find that floor(x/2) pieces are now inside.
You have k minutes to eat as much candy as possible. How many pieces of candy can you eat?
Signature
int maxCandies(int[] arr, int K)
Input
1 ≤ N ≤ 10,000
1 ≤ k ≤ 10,000
1 ≤ arr[i] ≤ 1,000,000,000
Output
A single integer, the maximum number of candies you can eat in k minutes.
Example 1
N = 5 
k = 3
arr = [2, 1, 7, 4, 2]
output = 14
In the first minute you can eat 7 pieces of candy. That bag will refill with floor(7/2) = 3 pieces.
In the second minute you can eat 4 pieces of candy from another bag. That bag will refill with floor(4/2) = 2 pieces.
In the third minute you can eat the 3 pieces of candy that have appeared in the first bag that you ate.
In total you can eat 7 + 4 + 3 = 14 pieces of candy.
 */
// time complexity O(logN)
function heapify(arr, heapSize, root) {
    let largest = root,
        leftChild = 2 * root + 1,
        rightChild = 2 * root + 2;
    
    // if left child is larger than root
    if (leftChild < heapSize && arr[leftChild] > arr[largest]) largest = leftChild;
    
    // if right child is larger than largest so far
    if (rightChild < heapSize && arr[rightChild] > arr[largest]) largest = rightChild;
    
    // if largest is not root
    if (largest != root) {
      let temp = arr[root];
      arr[root] = arr[largest];
      arr[largest] = temp;
      
      // recursively heapify the affected sub-tree
      heapify(arr, heapSize, largest);
    }
  }
  
  function maxCandies(arr, k) {
  
    let heapSize = arr.length,
        totalCandy = 0;
    
    // build heap (i.e. rearrange array)
    // time complexity O(NlogN)
    for (let i = Math.floor(heapSize/2) - 1; i >= 0; i--) {
      heapify(arr, heapSize, i);
    }
    
    // get max value, half it, then heapfiy from root, and repeat
    // til' k/minutes is 0
    // time complexity O(k*log(N))
    for (let minutes = k; minutes > 0; minutes--) {
      totalCandy += arr[0];
      
      arr[0] = Math.floor(arr[0]/2);
      
      heapify(arr, heapSize, 0);
    }
    
    return totalCandy;
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
  
  var n_1 = 5, k_1 = 3;
  var arr_1 = [2, 1, 7, 4, 2];
  var expected_1 = 14;
  var output_1 = maxCandies(arr_1, k_1);
  check(expected_1, output_1);
  
  var n_2 = 9, k_2 = 3;
  var arr_2 = [19, 78, 76, 72, 48, 8, 24, 74, 29];
  var expected_2 = 228;
  var output_2 = maxCandies(arr_2, k_2);
  check(expected_2, output_2); 
  
  // Add your own test cases here
  