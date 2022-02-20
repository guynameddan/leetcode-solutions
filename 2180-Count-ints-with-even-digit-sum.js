/**
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 */
/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        let tempSum = 0,
            currNum = i;
        
        while (currNum !== 0) {
            tempSum += currNum % 10;
            currNum = Math.floor(currNum / 10);
        }
        
        if (tempSum % 2 === 0) count++
    }
    
    return count;
};