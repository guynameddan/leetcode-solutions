// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minBitFlips = function(start, goal) {
    let startBin = dec2bin(start),
        goalBin = dec2bin(goal);
    
    return flips(startBin, goalBin);
};

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function flips(b1, b2) {
    let count = 0,
        zeroes;
    
    if (b1.length > b2.length) {
        zeroes = new Array(b1.length - b2.length).fill(0).join('');
        b2 = zeroes + b2;
    } else if (b1.length < b2.length) {
        zeroes = new Array(b2.length - b1.length).fill(0).join('');
        b1 = zeroes + b1;
    }
    
    for (let i = 0; i < b2.length; i++) {
        if (b1[i] !== b2[i]) {
            count++;
        }
    }
    
    return count;
}

// better solution
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
 var minBitFlips = function(start, goal) {
    let orVal = start ^ goal,
        count = 0;
    
    while (orVal > 0) {
        // count++;
        // orVal &= (orVal - 1);
        
        // above is same as below
        if (orVal & 1) count++;
        orVal >>= 1; // bit t right by one
    }
    
    return count;
};