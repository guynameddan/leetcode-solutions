/**
 * Matching Pairs
Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
Note: This means you must swap two characters at different indices.
Signature
int matchingPairs(String s, String t)
Input
s and t are strings of length N
N is between 2 and 1,000,000
Output
Return an integer denoting the maximum number of matching pairs
Example 1
s = "abcd"
t = "adcb"
output = 4
Explanation:
Using 0-based indexing, and with i = 1 and j = 3, s[1] and s[3] can be swapped, making it  "adcb".
Therefore, the number of matching pairs of s and t will be 4.
Example 2
s = "mno"
t = "mno"
output = 1
Explanation:
Two indices have to be swapped, regardless of which two it is, only one letter will remain the same. If i = 0 and j=1, s[0] and s[1] are swapped, making s = "nmo", which shares only "o" with t.
 */
/**
Legitimately one of the worst problems I have ever solved.

It's not the wording that's bad. It's the fact that this question
requires you to solve every edge case and scenario. Unfortunately
there is NO CLEAN way to solve this.

*/


function matchingPairs(s, t) {
    let diff = new Set(),
        same = new Set(),
        count = 0,
        isDuplicate = false;
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === t[i]) {
        count++;
        
        // check if there's a duplicate
        if (same.has(s[i])) isDuplicate = true;
        
        same.add(s[i]);
      } else diff.add(s[i] + "" + t[i]);
    }
    
    // if each letter in the same idx is the same in s and t
    // there's 2 scenarios
    // (1) If s has 2 letters that are the same then those
    // indices can be switched so that s can still be the same
    // (2) If s doesn't have 2 letters that are the same, then
    // that means no matter which 2 letters I choose the number
    // of same letters, count, has to decrease by 2
    if (count === s.length) {
      return isDuplicate ? count : count - 2;
    }
    
    // What if both strings were only one letter off?
    // (1) If there is a duplicate of another letter or of the
    // different letters then those can be switched thus maintaining
    // the current count
    // (2) If a duplicate isn't available then regardless of which
    // letters are switched the count will decrease by 1
    if (count === s.length - 1) {
      if (isDuplicate) return count;
      
      for (let str of diff) {
        if (same.has(str[0]) || same.has(str[1])) return count;
      }
      
      return count - 1;
    }
    
    // Assuming all other cases above were a miss, what if
    // there were 2 letters in s that exist in t but are in different indices?
    // Then we know that we can pick 2 letters to switch that can
    // match t in those same indices. (example: s = "aecf", t = "afce")
    for (let str of diff) {
      if (diff.has(str[1] + "" + str[0])) return count + 2;
    }
    
    // Assuming all other cases above were a miss, what if
    // both strings had 1 letter that were the same but in
    // different indices? If we switched that index with any other index,
    // then we'd increase the count by 1.
    
    let diffS = new Set(),
        diffT = new Set();
    
    for (let str of diff) {
      if (diffS.has(str[1]) || diffT.has(str[0])) return count + 1;
      
      diffS.add(str[0]);
      diffT.add(str[1]);
    }
    
    return count;
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
  
  var s_1 = "abcde";
  var t_1 = "adcbe";
  var expected_1 = 5;
  var output_1 = matchingPairs(s_1, t_1);
  check(expected_1, output_1);
  
  var s_2 = "abcd";
  var t_2 = "abcd";
  var expected_2 = 2;
  var output_2 = matchingPairs(s_2, t_2);
  check(expected_2, output_2); 
  
  // Add your own test cases here
  