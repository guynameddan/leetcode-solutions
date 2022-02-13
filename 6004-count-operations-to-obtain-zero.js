/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var countOperations = function(num1, num2) {
    let operations = 0;
    
    if (num1 === 0 || num2 === 0) return 0;
    else if (num1 === num2) return 1;
    
    while (num1 !== 0 && num2 !== 0) {
        if (num1 < num2) num2 -= num1;
        else if (num1 > num2) num1 -= num2;
        else return ++operations;
        
        operations++;
    }
    
    return operations;
};