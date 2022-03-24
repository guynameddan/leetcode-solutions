// https://leetcode.com/problems/verifying-an-alien-dictionary/submissions/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    let orderMap = new Map();
    
    for (let i = 0; i < order.length; i++) {
        if (!orderMap.get(order[i])) {
            orderMap.set(order[i], i);
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) return false;
            
            if (words[i][j] !== words[i + 1][j]) {
                if (orderMap.get(words[i][j]) > orderMap.get(words[i + 1][j])) return false;
                
                break;
            }
        }
    }
    
    return true;
};