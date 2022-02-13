/**
 * @param {number[]} beans
 * @return {number}
 */
 var minimumRemoval = function(beans) {
    let min = Infinity,
        max = -Infinity,
        maxDelta = 0,
        minDelta = 0,
        minIdx = 0,
        delta = 0;
    
    for (let i = 0; i < beans.length; i++) {
        if (max < beans[i]) max = beans[i];
        if (min > beans[i]) {
            min = beans[i];
            minIdx = i;
        }
    }
    
    // min
    for (let j = 0; j < beans.length; j++) {
        minDelta += beans[j] - min;
        maxDelta += max - beans[j];
    }

    
    return Math.min(maxDelta, minDelta);
};