/**
You are given an integer num. Rearrange the digits of num such that its value is minimized and it does not contain any leading zeros.

Return the rearranged number with minimal value.

Note that the sign of the number does not change after rearranging the digits.

 

Example 1:

Input: num = 310
Output: 103
Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. 
The arrangement with the smallest value that does not contain any leading zeros is 103.
Example 2:

Input: num = -7605
Output: -7650
Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
The arrangement with the smallest value that does not contain any leading zeros is -7650.
 

Constraints:

-1015 <= num <= 1015
*/

/**
 * @param {number} num
 * @return {number}
 */
 var smallestNumber = function(num) {
    let i = 1,
        zeros = 0,
        isNegative = false,
        result = 0;
    
    if (num < 0) {
        num = Math.abs(num);
        isNegative = true;
        result = num.toString().split('').sort((a, b) => b - a);
    } else result = num.toString().split('').sort((a, b) => a - b);
    
    result = result.map(x => parseInt(x));
        
    while (result[0] === 0 && !isNegative) {
        if (i >= result.length) break;
        
        if (result[i] !== 0) {
            result[0] = result[i];
            zeros = i;
        }
        
        i++   
    }
    
    if (isNegative) {
        result = result.join('') * -1;
    } else {
        for (i = 1; i <= zeros; i++) {
            result[i] = 0;
        }
        
        result = result.join('');
    }
        
    return result;
};