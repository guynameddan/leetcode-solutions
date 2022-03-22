/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class binHeap {
    constructor() {
        this.list = [];
    }
    
    // Insert Value
    insert(arr) {
        this.list.push(arr);
        
        // Heapify the list
        for (let root = Math.floor((this.list.length / 2) - 1); root >= 0; root--) {
            this.maxHeapify(this.list, this.list.length, root);
        }
    }
    
    // Heapify
    maxHeapify(arr, len, root) {
        let largest = root,
            left = 2 * root + 1,
            right = 2 * root + 2;
        
        // If left child is smaller than root
        if (left < len && arr[left][0] > arr[largest][0]) largest = left;
        
        // If right child is smaller than smallest so far
        if (right < len && arr[right][0] > arr[largest][0]) largest = right;
        
        // If largest isn't root, swap root with the index of the
        // current largest
        if (largest != root) {
            let temp = arr[root];
            arr[root] = arr[largest];
            arr[largest] = temp;
            
            // Then recursively heapify the affected sub-tree until
            // the max heap rules are followed.
            this.maxHeapify(arr, len, largest);
        }
    }
    
    // Get max and remove max
    extractMax() {
        // Swap max with last element
        let len = this.list.length;
        
        [this.list[0], this.list[len - 1]] = [this.list[len - 1], this.list[0]];
        
        let max = this.list.pop();
        
        // Heapify the list
        for (let root = Math.floor((this.list.length / 2) - 1); root >= 0; root--) {
            this.maxHeapify(this.list, this.list.length, root);
        }
        
        return max;
    }
}


var topKFrequent = function(nums, k) {
    // Heap version
    
    if (k === nums.length) return nums;
    
    let counts = new Map(),
        result = [],
        freq = [];
    
    // Build hashmap
    // [key, value] => [integer of nums, integer's frequency]
    for (let num of nums) {
        if (!counts.has(num)) {
            counts.set(num, 1);
        } else {
            let currCount = counts.get(num) + 1;
            counts.set(num, currCount);
        }
    }
        
    // Swap the key with the value so we can work with the
    // frequency of the integers
            
    let maxHeap = new binHeap();
    
    for (let [num, count] of counts) {        
        let swapped = [count, num];
        
        maxHeap.insert(swapped);
    }
    
    for (let i = 0; i <= k; i++) {
        if (result.length === k) return result;
        
        let currMax = maxHeap.extractMax();
        
        result.push(currMax[1]);
    }
    
};