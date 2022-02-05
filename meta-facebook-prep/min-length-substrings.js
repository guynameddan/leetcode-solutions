/**
 * 
Minimum Length Substrings
You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring. Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
Signature
int minLengthSubstring(String s, String t)
Input
s and t are non-empty strings that contain less than 1,000,000 characters each
Output
Return the minimum length of the substring of s. If it is not possible, return -1
Example
s = "dcbefebce"
t = "fd"
output = 5
Explanation:
Substring "dcbef" can be rearranged to "cfdeb", "cefdb", and so on. String t is a substring of "cfdeb". Thus, the minimum length required is 5.
 */
function minLengthSubstring(s, t) {
  let t_letters = new Map(),
      left = 0,
      right = 0,
      count = 0,
      tChars = t.length,
      min = Infinity,
      temp = 0;
  
  for (let letter of t) {
    if (!t_letters.has(letter)) t_letters.set(letter, 1);
    else {
      count = t_letters.get(letter);
      t_letters.set(letter, ++count);
    }
  }
  
  while (right != s.length) {
    count = t_letters.get(s[right]);
      
    if (t_letters.has(s[right++]) && count > 0) {
      t_letters.set(s[right], --count)
      tChars--;
    }
    
    while (tChars === 0) {
      if (t_letters.has(s[left++])) {
        tChars++;
        temp = right - left + 1;
        min = Math.min(temp, min);
      }
    }
    
  }
  
  return min === Infinity ? -1 : min;
  
}

  console.log(minLengthSubstring("dcbefebce", "fd"));

  let a = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf",
    b = "cbccfafebccdccebdd";

/**
 * a 1
 * b 3
 * c 7
 * d 3
 * e 2
 * f 2
 */


  console.log(minLengthSubstring(a, b));

