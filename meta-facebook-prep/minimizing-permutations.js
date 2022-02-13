/**
 * Minimizing Permutations
In this problem, you are given an integer N, and a permutation, P of the integers from 1 to N, denoted as (a_1, a_2, ..., a_N). You want to rearrange the elements of the permutation into increasing order, repeatedly making the following operation:
Select a sub-portion of the permutation, (a_i, ..., a_j), and reverse its order.
Your goal is to compute the minimum number of such operations required to return the permutation to increasing order.
Signature
int minOperations(int[] arr)
Input
Array arr is a permutation of all integers from 1 to N, N is between 1 and 8
Output
An integer denoting the minimum number of operations required to arrange the permutation in increasing order
Example
If N = 3, and P = (3, 1, 2), we can do the following operations:
Select (1, 2) and reverse it: P = (3, 2, 1).
Select (3, 2, 1) and reverse it: P = (1, 2, 3).
output = 2
 */
function swap(perm, start, end) {
    let reverse = [],
        unchanged1 = [],
        unchanged2 = [];
    
    perm = perm.split('');
    
    // if (start === 0) {
    //   if (end === perm.length) {
    //     return perm.reverse().join('').toString();
    //   } else {
    //     reverse = perm.slice(start, end).reverse();
    //     unchanged1 = perm.slice(end, perm.length);
    //     return reverse.concat(unchanged1).join('').toString();
    //   }
    // } else { // else start is in the middle of array
    //     if (end === perm.length) { // end is last element
    //       unchanged1 = perm.slice(0, start);
    //       reverse = perm.slice(start, end).reverse();
    //       return unchanged1.concat(reverse).join('').toString();
    //     } else { // 3 subarrays to keep track of
    //       unchanged1 = perm.slice(0, start);
    //       reverse = perm.slice(start, end).reverse();
    //       unchanged2 = perm.slice(end, perm.length);
    //       unchanged1 = unchanged1.concat(reverse);
    //       return unchanged1.concat(unchanged2).join('').toString();
    //     }
    // }

    // below is the exact same code as above
    // this works because slice doesn't care if an array is
    // undefined. If it's undefined then slice just returns
    // an empty array.
    unchanged1 = perm.slice(0, start);
    reverse = perm.slice(start, end).reverse();
    unchanged2 = perm.slice(end, perm.length);
    unchanged1 = unchanged1.concat(reverse);
    
    return unchanged1.concat(unchanged2).join('').toString();
    
  }
  
  function minOperations(arr) {
    // BFS
    let start = arr.join('').toString(),
        target = arr.sort((a,b) => a - b).join('').toString(),
        queue = [start],
        visited = new Set(),
        swaps = 0,
        qLen = queue.length,
        current = '',
        nextWord = '';
    
    visited.add(start);  
    
    while (queue.length > 0) {
      
      for (let i = 0; i < qLen; i++) {
        current = queue.shift();
        
        if (current === target) return swaps;
        
        for (let j = 0; j < target.length; j++) {
          for (let k = j + 1; k < target.length; k++) {
            
            // reverse substring
            // reverse substring index i to j + 1 (exclusive)
            nextWord = swap(current, j, k + 1);
            
            if (!visited.has(nextWord)) {
              visited.add(nextWord);
              queue.push(nextWord);
            }
            
          }
        }
        
      }
      
      swaps++;
      qLen = queue.length;
      
    }
    
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
  
  var n_1 = 5;
  var arr_1 = [1, 2, 5, 4, 3];
  var expected_1 = 1;
  var output_1 = minOperations(arr_1);
  check(expected_1, output_1);
  
  var n_2 = 3;
  var arr_2 = [3, 1, 2];
  var expected_2 = 2;
  var output_2 = minOperations(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  