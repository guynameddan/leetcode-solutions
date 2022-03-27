// https://leetcode.com/problems/random-pick-with-weight/
/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.prefixSums = [];
    
    let sum = 0;
    
    for (let weight of w) {
        sum += weight;
        this.prefixSums.push(sum);
    }
    
    this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = this.total * Math.random();
    
    // binary search
    let [left, right] = [0, this.prefixSums.length - 1];
    
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        
        if (target > this.prefixSums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */