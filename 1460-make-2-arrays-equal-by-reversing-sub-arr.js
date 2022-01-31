// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    let len = arr.length,
        numMap = new Map(),
        numCount = 0;
    
    for (let i = 0; i < len; i++) {
        if (numMap.has(target[i])) {
            numCount = numMap.get(target[i]);
            numMap.set(target[i], ++numCount)
        } else numMap.set(target[i], 1);
    }
    
    for (let num of arr) {
        if (numMap.has(num) && numMap.get(num) > 0) {
            numCount = numMap.get(num);
            numMap.set(num, --numCount);
            len--;
        }
    }
    
    if (len === 0) return true;
    
    return false;
};