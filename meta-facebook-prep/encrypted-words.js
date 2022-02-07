/**
 * Encrypted Words
You've devised a simple encryption method for alphabetic strings that shuffles the characters in such a way that the resulting string is hard to quickly read, but is easy to convert back into the original string.
When you encrypt a string S, you start with an initially-empty resulting string R and append characters to it as follows:
Append the middle character of S (if S has even length, then we define the middle character as the left-most of the two central characters)
Append the encrypted version of the substring of S that's to the left of the middle character (if non-empty)
Append the encrypted version of the substring of S that's to the right of the middle character (if non-empty)
For example, to encrypt the string "abc", we first take "b", and then append the encrypted version of "a" (which is just "a") and the encrypted version of "c" (which is just "c") to get "bac".
If we encrypt "abcxcba" we'll get "xbacbca". That is, we take "x" and then append the encrypted version "abc" and then append the encrypted version of "cba".
Input
S contains only lower-case alphabetic characters
1 <= |S| <= 10,000
Output
Return string R, the encrypted version of S.
Example 1
S = "abc"
R = "bac"
Example 2
S = "abcd"
R = "bacd"
Example 3
S = "abcxcba"
R = "xbacbca"
Example 4
S = "facebook"
R = "eafcobok"
 */
function findEncryptedWord(s) {
    if (!s) return;
    if (s.length === 1) return s;
    
    let mid = 0,
        result = "";
    
    if (s.length % 2 === 0) {
      mid = (s.length / 2) - 1;
    } else {
      mid = Math.floor(s.length / 2);
    }

    result += s[mid] + findEncryptedWord(s.substring(0,mid)) + findEncryptedWord(s.substring(mid+1, s.length));

    return result;
  }

  let s = "abc",
    expected_1 = "bac";
    output_1 = findEncryptedWord(s);

    console.log(output_1);

  let s2 = "abcxcba",
    R = "xbacbca";

  output2 = findEncryptedWord(s2);

  console.log(output2);