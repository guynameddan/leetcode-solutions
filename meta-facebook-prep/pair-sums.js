/**
 * 
Pair Sums
Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered different if one pair includes at least one array index which the other doesn't, even if they include the same values.
Signature
int numberOfWays(int[] arr, int k)
Input
n is in the range [1, 100,000].
Each value arr[i] is in the range [1, 1,000,000,000].
k is in the range [1, 1,000,000,000].
Output
Return the number of different pairs of elements which sum to k.
Example 1
n = 5
k = 6
arr = [1, 2, 3, 4, 3]
output = 2
The valid pairs are 2+4 and 3+3.
Example 2
n = 5
k = 6
arr = [1, 5, 3, 3, 3]
output = 4
There's one valid pair 1+5, and three different valid pairs 3+3 (the 3rd and 4th elements, 3rd and 5th elements, and 4th and 5th elements).
 */
function numberOfWays(arr, k) {
    let numMap = new Map(),
        visited = new Set();
        diff = 0,
        count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (numMap.get(arr[i]) !== i) {
        numMap.set(arr[i], i);
      }
    }
    
    for (let i = 0; i < arr.length; i++) {
      diff = k - arr[i];
      
      if (numMap.has(arr[i]) && !visited.has([i, numMap.get(arr[i])]) && !visited.has([numMap.get(arr[i]), i])) {
        count++;
        visited.add([i, numMap.get(arr[i])]);
        visited.add([numMap.get(arr[i]), i]);
      }
    }

    console.log(numMap);
    console.log(visited);
    
    return count;
}

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);

console.log(output_1);