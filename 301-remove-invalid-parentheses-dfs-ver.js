https://leetcode.com/problems/remove-invalid-parentheses/
/**
 * @param {string} s
 * @return {string[]}
 */
 var removeInvalidParentheses = function(s) {
    // DFS
    let left = 0,
        right = 0,
        result = new Map();
    
    // First, find out number of misplace left and right parentheses.
    for (let char of s) {
        
        // If left, then just increment left count
        if (char === '(') left++;
        else if (char === ')') {
            // If no matching left, then this is a misplaced right
            right = left === 0 ? right + 1 : right;
            
            // If right has a left to match, then decrement left
            left = left > 0 ? left - 1 : left;
        }
    }
    
    function recurse(s, idx, leftCount, rightCount, leftRem, rightRem, expr, result) {
        // If we're at the end of string, check rem of both sides
        if (idx === s.length) {
            if (leftRem === 0 && rightRem === 0) {
                let answer = expr.join('');
                result.set(answer, 1);
            }
        } else {
            // discard case
            if ((s[idx] === '(' && leftRem > 0) || (s[idx] === ')' && rightRem > 0)) {
                recurse(s, idx + 1, leftCount, rightCount, leftRem - (s[idx] === '('), rightRem - (s[idx] === ')'), expr, result);
            }
            
            expr.push(s[idx]);
            
            // recurse one step further if char isn't a parenthesis
            if (s[idx] !== '(' && s[idx] !== ')') {
                recurse(s, idx + 1, leftCount, rightCount, leftRem, rightRem, expr, result);
            } else if (s[idx] === '(') {
                recurse(s, idx + 1, leftCount + 1, rightCount, leftRem, rightRem, expr, result);
            } else if (s[idx] === ')' && leftCount > rightCount) {
                recurse(s, idx + 1, leftCount, rightCount + 1, leftRem, rightRem, expr, result);
            }
                        
            expr.pop();
        }
    }
    
    recurse(s, 0, 0, 0, left, right, [], result);
        
    return Array.from(result.keys());
};