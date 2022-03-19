// https://leetcode.com/problems/longest-palindromic-substring/submissions/
// https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm
// https://medium.com/hackernoon/manachers-algorithm-explained-longest-palindromic-substring-22cb27a5e96f#:~:text=Manacher's%20Algorithm%20helps%20us%20find,insights%20into%20how%20palindromes%20work.
/**
 * @param {string} s
 * @return {string}
 */
//////////////////
// This solution has a time complexity of O(N)
// IMPORTANT: This is not complete.
// Look at links to understand further
 var longestPalindrome = function(s) {
    let sPrime = '-' + s.split('').join('-') + '-',
        p = new Array(sPrime.length).fill(0),
        center = 0,
        rad = 0;
    
    while (center < sPrime.length) {
        while ((center - (rad + 1)) >= 0 &&
               (center + (rad + 1)) < sPrime.length &&
               sPrime[center - (rad + 1)] === sPrime[center + (rad + 1)]) {
            rad++;
        }
        
        p[center] = rad;
        
        let oldCenter = center,
            oldRad = rad;
        center++;
        rad = 0;
        
        while (center <= (oldCenter + oldRad)) {
            let mirroredCenter = oldCenter - (center - oldCenter),
                maxMirroredRad = oldCenter + oldRad - center;
            
            if (p[mirroredCenter] < maxMirroredRad) {
                p[center] = p[mirroredCenter];
                center++;
            } else if (p[mirroredCenter] < maxMirroredRad) {
                p[center] = maxMirroredRad;
                center++;
            } else {
                rad = maxMirroredRad;
                break;
            }
       }
    }
    
    let maxPalindromeInPrime = 2 * Math.max(...p) + 1,
        maxPalindrome = (maxPalindromeInPrime - 1) / 2;
    
    return maxPalindrome;
};