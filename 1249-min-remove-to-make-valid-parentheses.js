// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    let stack = [],
        result = '';
    
    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];
        
        if (s[i] === ')') {
            if (stack.length < 1 ||
                s[top] !== '(') {
                stack.push(i)
            } else {
                stack.pop();
            }
        } else if (s[i] === '(') {
            stack.push(i);
        } else {
            continue;
        }
    }
    
    // Since indices are unique we can use a
    // set. This set will tell us which indices
    // to ignore when building the new string
    stack = new Set(stack);
    
    for (let i = 0; i < s.length; i++) {
        if (stack.has(i)) continue;
        
        result += s[i];    
    }
    
    return result;
};