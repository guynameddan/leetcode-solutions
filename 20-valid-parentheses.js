// https://leetcode.com/problems/valid-parentheses/submissions/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // We're going through every char of string s once so
    // O(N) time complexity where N is the length of the string
    let stack = [],
        closeToOpen = new Map();
    
    closeToOpen.set(')', '(');
    closeToOpen.set('}', '{');
    closeToOpen.set(']', '[');

    for (let i = 0; i < s.length; i++) {
        // if the current char is a closing char
        if (closeToOpen.has(s[i])){
            if (stack.length > 0 && stack[stack.length - 1] === closeToOpen.get(s[i])) {
                // if there's something in the stack and the top of stack is the opening char
                stack.pop();
            } else {
                // there can be as many opening chars but the end of the opening chars
                // must follow an ending char
                return false;
            }
        } else {
            // if none of the conditions above are met, the current char is an opening char
            stack.push(s[i]);
        }
    }
    
    // since every bracket must be in pairs there can't be anything left in the stack
    return stack.length === 0 ? true : false;
};