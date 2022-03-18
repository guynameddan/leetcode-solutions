https://leetcode.com/problems/valid-palindrome/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    
    // 2 pointer method
    let [left, right] = [0, s.length - 1];
    
    while (left < right) {
        while ((left < right) && !isAlphaNum(s[left])) {
            left++;
        }
        
        while ((left < right) && !isAlphaNum(s[right])) {
            right--;
        }
        
        if (s[left].toUpperCase() !== s[right].toUpperCase()) return false;
        
        left++;
        right--;
    }
    
    return true;
};
    
function isAlphaNum(char) {
    let [lowStart, lowEnd] = ['a', 'z'],
        [capStart, capEnd] = ['A', 'Z'],
        [numStart, numEnd] = ['0', '9'],
        charCode = char.charCodeAt(0);
    
    if ((charCode >= lowStart.charCodeAt(0) && charCode <= lowEnd.charCodeAt(0)) ||
        (charCode >= capStart.charCodeAt(0) && charCode <= capEnd.charCodeAt(0)) ||
        (charCode >= numStart.charCodeAt(0) && charCode <= numEnd.charCodeAt(0))) {
        return true;
    } else {
        return false;
    }    
}