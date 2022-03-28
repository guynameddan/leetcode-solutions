// https://leetcode.com/problems/remove-invalid-parentheses/discuss/154272/JavaScript-BFS-solution
// https://leetcode.com/problems/remove-invalid-parentheses/submissions/
/**
 * @param {string} s
 * @return {string[]}
 */
 var removeInvalidParentheses = function(s) {
    // BFS version

    let queue = new Set([s]);
    
    while (queue.size) {
        const next = new Set();
    
        for (let v of queue) {
            if (isValid(v)) return [...queue].filter(isValid);
      
            for (let i = 0; i < v.length; i++) {
                next.add(v.slice(0, i) + v.slice(i+1));
            }
        }
        
        queue = next;
  }

    // if no valid strings found
    return [''];
};

function isValid(str) {
    let bal = 0;
    
    for (let ch of str) {
          
        if (ch === '(') bal++;
        else if (ch === ')') bal--;
          
        // if at any point there's a closing parenthesis
        // without a matching opening one, then bal will be
        // less than 0, i.e. not a valid string
        if (bal < 0) return false;
    } 
    
    // if bal is 0 then it's a valid string
    return bal === 0;
}