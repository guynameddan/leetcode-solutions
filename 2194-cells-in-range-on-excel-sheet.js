// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
/**
 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
    let result = [];
    
    for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) { // columns
        for (let j = Number(s[1]); j <= Number(s[4]); j++) { // rows
            let col = String.fromCharCode(i),
                row = j.toString();
                
            result.push(col.concat(row));
        }
    }
        
    return result;
};