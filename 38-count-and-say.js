// https://leetcode.com/problems/count-and-say/
/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let value = "1";
    
    for (let i = 1; i < n; i++) {
        value = outputResult(value);
    }
    
    return value;
};

function outputResult(value) {
    // if string is length 1 then we know there's 1 count of
    // whatever the char is
    if (value.length === 1) return `1${value}`;
    
    let newVal = '',
        current = value[0],
        count = 1;
    
    // for loop looks at current char/number and
    // does one of the following: (1) if the current
    // char and next char are different, concat the
    // current count and current number to newVal. (2) if
    // the current char and next char are the same, just
    // increment the count of current char.
    for (let i = 1; i <= value.length; i++) {
        if (current != value[i] || i === value.length) {
            newVal += `${count}${current}`;
            count = 1;
            current = value[i];
        } else {
            count++;
        }
    }
    
    return newVal;
}