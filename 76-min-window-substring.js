// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if (s.length == 0 || t.length == 0) return "";
    
    // create and populate the hash table with all letters and count from t
    let lettersMap = new Map();
    
    for (let i = 0; i < t.length; i++) {
        if (lettersMap.get(t[i])) {
            lettersMap.get(t[i]).count++;
        } else {
            lettersMap.set(t[i], {count: 1});
        }
    }
    
    let total = t.length,
        subStart = 0,
        min = Number.MAX_SAFE_INTEGER,
        leftPtr = rightPtr = 0;
    
    // The way this for loop works is it has 2 pointers.
    // One for the right side of the substring we'll be returning
    // and another for the left side. There's also a variable called
    // "total" and it maintains the total number of letters in t left
    // to account for in our window from the left side pointer to the right side.
    // So if the total were to go to zero then we know we've accounted for all
    // letters that are required to be in our window.
    //
    // When the window has all letters (i.e. when total is equal to 0), we check the
    // range of the window and compare it to the "min" variable. If the new window is
    // smaller than what we had before, min is replaced with the length of the new range
    // (i.e. right pointer minus the left pointer plus 1 because we index from 0) and the
    // "subStart" variable is overwritten with the position of the left pointer.
    //
    // Now it's the left pointer's turn to move. If the left pointer is at a letter that
    // exists in the hash table and the count is greater than 0 then total is incremented.
    // What this is saying is whenever the left pointer passes by a letter we need in the
    // substring then that letter is no longer a part of the window and therefore the total
    // count needs to increment. During this check, regardless of the count being greater
    // than 0 or not, the left pointer will move up (leftPtr++) and the count will have
    // increased by 1 prior to the > 0 check.
    for (rightPtr = 0, leftPtr = 0; rightPtr < s.length; rightPtr++) {
        if (lettersMap.get(s[rightPtr]) && lettersMap.get(s[rightPtr]).count-- > 0) total--
        
        while (total == 0) {
            if (rightPtr - leftPtr + 1 < min) {
                min = rightPtr - leftPtr + 1;
                subStart = leftPtr;
            }

            if (lettersMap.get(s[leftPtr])) {
                if (++lettersMap.get(s[leftPtr++]).count > 0) total++;
            } else {
                leftPtr++;
            }
        }
    }
    
    return (min == Number.MAX_SAFE_INTEGER) ? "" : s.substring(subStart, subStart + min);
};