// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

///////////////////////
// LESS EFFICIENT VER//
///////////////////////
/**
 * This version forces you to look up every element of the array
 * instead of skipping 0s
 */
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 var SparseVector = function(nums) {
    this.arr = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let arr1 = this.arr,
        arr2 = vec.arr,
        product = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        product += arr1[i] * arr2[i];
    }
    
    return product;
};

///////////////////////
// MORE EFFICIENT VER//
///////////////////////
/**
 * This version is more efficient then the solution above
 * but, BE CAREFUL. Hashmaps get expensive when handling
 * large vectors. So if interviewers says to find another
 * method use the last solution in this file.
 */
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 var SparseVector = function(nums) {
    this.nonZeros = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.nonZeros.set(i, nums[i]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0;
    
    for (let [index, value] of this.nonZeros) {        
        if (vec.nonZeros.has(index)) {
            result += this.nonZeros.get(index) * vec.nonZeros.get(index);
        }
    }
    
    
    
    return result;
};

///////////////////////
// MOST EFFICIENT VER//
///////////////////////
/**
 * This solution becomes the most efficient solution when dealing with large
 * arrays/vectors.
 */
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
 var SparseVector = function(nums) {
    this.nonZero = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.nonZero.push([i, nums[i]]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let result = 0,
        ptr1 = 0,
        ptr2 = 0;
    
    while (ptr1 < this.nonZero.length && ptr2 < vec.nonZero.length) {
        if (this.nonZero[ptr1][0] === vec.nonZero[ptr2][0]) {
            result += this.nonZero[ptr1][1] * vec.nonZero[ptr2][1];
            ptr1++;
            ptr2++;
        } else if (this.nonZero[ptr1][0] > vec.nonZero[ptr2][0]) {
            ptr2++;
        } else {
            ptr1++;
        }
    }
    
    return result;
};