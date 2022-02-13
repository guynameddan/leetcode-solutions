/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumOperations = function(nums) {
    let both = new Set(),
        evens = new Map(),
        odds = new Map(),
        count = 0,
        evensMax = 0,
        oddsMax = 0,
        ops = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (evens.has(nums[i])) {
                count = evens.get(nums[i]);
                evens.set(nums[i], ++count);
            } else {
                evens.set(nums[i], 1);
            }
        } else { // odd index
            if (odds.has(nums[i])) {
                count = odds.get(nums[i]);
                odds.set(nums[i], ++count);
            } else {
                odds.set(nums[i], 1);
            }
        }
        
        if (evens.has(nums[i]) && odds.has(nums[i])) {
            both.add(nums[i]);
        }
        
    }
    
    for (let j = 0; j < nums.length; j++) {
        if (both.has(nums[j])) continue;
        else {
            if (j % 2 === 0) {
                count = evens.get(nums[j]);
                
                evensMax = Math.max(evensMax, count);
            } else {
                count = odds.get(nums[j]);
                
                oddsMax = Math.max(oddsMax, count);
            }
        }
    }
    
    if (evensMax !== 0) {
        if (nums.length % 2 === 0) {
            evensMax = (nums.length / 2) - evensMax;
        } else {
            evensMax = ((nums.length + 1) / 2) - evensMax;
        }
    } else if (oddsMax !== 0) {
        if (nums.length % 2 === 0) {
            oddsMax = (nums.length / 2) - oddsMax;
        } else {
            oddsMax = ((nums.length - 1) / 2) - oddsMax;
        }
    }
    
    return evensMax + oddsMax;
    
};