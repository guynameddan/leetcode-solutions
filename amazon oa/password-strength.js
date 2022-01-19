/*
Given a string password, find the strength of that password. The strength of a password, consisting only lowercase english letters only, is calculated as the sum of the number of distinct characters present in all possible substrings of that password.
Example:- password = "good"
possible sub string and count of distinct characters are
g = 1
o = 1
o = 1
d = 1
go = 2
oo = 1
od = 2
goo = 2
ood = 2
good = 3
1+1+1+1+2+1+2+2+2+3 = 16

Example:- password: "test"
Output: 19
Example:- password: "abc"
Output: 10

Given a function description:
public static long findPasswordStrength(String password);


solution: https://leetcode.com/discuss/interview-question/1526418/Count-strength-of-pa%20%20ssword-or-amazon
https://leetcode.com/discuss/interview-question/1594897/Amazon-OA-questions-Find-password-strength

*/