// https://leetcode.com/problems/random-pick-with-weight/
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
    
    for (let i = 0; i < this.prefixSums.length; i++) {
        if (target < this.prefixSums[i]) return i;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */