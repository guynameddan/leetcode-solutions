https://leetcode.com/problems/valid-palindrome/submissions/

//////// charcode/unicode ver //////
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // Time complexity: O(N)
    // Space complexity: O(N)
    
    // charcode/unicode ver
    let onlyAlphaNum = '';
    
    for (let char of s) {
        if (isAlphaNumeric(char)) onlyAlphaNum += char;
    }
    
    onlyAlphaNum = onlyAlphaNum.toUpperCase();
    
    return onlyAlphaNum === onlyAlphaNum.split("").reverse().join("");
};

function isAlphaNumeric(char) {
    // console.log("i'm in here")
    let [lowStart, lowEnd] = ['a', 'z'],
        [capStart, capEnd] = ['A', 'Z'],
        [numStart, numEnd] = ['0', '9'],
        charCode = char.charCodeAt(0);
    
    if ((charCode >= lowStart.charCodeAt(0) && charCode <= lowEnd.charCodeAt(0)) ||
       (charCode >= capStart.charCodeAt(0) && charCode <= capEnd.charCodeAt(0)) ||
       (charCode >= numStart.charCodeAt(0) && charCode <= numEnd.charCodeAt(0))) {
        return true;
    }
    
    return false;
}

//////// RegExp Ver ////////
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    
    let isAlphaNum = /^[0-9a-zA-Z]+$/,
        onlyAlphaNum = '';
    
    for (let char of s) {
        if (char.match(isAlphaNum)) onlyAlphaNum += char;
    }
    
    onlyAlphaNum = onlyAlphaNum.toUpperCase();
    
    console.log(onlyAlphaNum);
    
    return onlyAlphaNum === onlyAlphaNum.split('').reverse().join('');
};