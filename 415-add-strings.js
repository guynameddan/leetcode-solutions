// https://leetcode.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0,
        result = '';
    
    while (i >= 0 || j >= 0 || carry) {
        let val1 = num1[i] || 0,
            val2 = num2[j] || 0,
            sum = +val1 + +val2 + carry;
        
        carry = Math.floor(sum / 10);
        // carry = sum > 9 ? 1 : 0;
        
        result = sum % 10 + result;
        
        i--;
        j--;
    }
    
    return result;
};

/**
 * Below is using charCodeAt() method
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0,
        sum = 0,
        result = '',
        start = '0';
    
    while (i >= 0 || j >= 0 || carry) {
        let val1 = num1.charCodeAt(i) - start.charCodeAt(0) || 0,
            val2 = num2.charCodeAt(j) - start.charCodeAt(0) || 0,        
            sum = val1 + val2 + carry;
        
        carry = sum > 9 ? 1 : 0;
        
        result = (sum % 10) + result;
        
        i--;
        j--;
    }
    
    return result;
    
};