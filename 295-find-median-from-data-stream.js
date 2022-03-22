// https://leetcode.com/problems/find-median-from-data-stream/submissions/
class binHeap {
    constructor() {
        this.list = [];
    }
    
    // Insert value in max heap
    insertMaxHeap(num) {
        this.list.push(num);
        
        // Heapify the list
        for (let root = Math.floor((this.list.length / 2) - 1); root >= 0; root--) {
            this.maxHeapify(this.list, this.list.length, root);
        }
    }
    
    // Insert value in min heap
    insertMinHeap(num) {
        this.list.push(num);
        
        // Heapify the list
        for (let root = Math.floor((this.list.length / 2) - 1); root >= 0; root--) {
            this.minHeapify(this.list, this.list.length, root);
        }
    }
    
    // Heapify for max heap
    maxHeapify(arr, len, root) {
        let largest = root,
            left = 2 * root + 1,
            right = 2 * root + 2;
        
        // If left child is larger than root
        if (left < len && arr[left] > arr[largest]) largest = left;
        
        // If right child is larger than largest so far
        if (right < len && arr[right] > arr[largest]) largest = right;
        
        // If largest isn't root, swap root with the index of the
        // current largest
        if (largest != root) {
            let temp = arr[root];
            arr[root] = arr[largest];
            arr[largest] = temp;
        }
    }
    
    // Heapify for min heap
    minHeapify(arr, len, root) {
        let largest = root,
            left = 2 * root + 1,
            right = 2 * root + 2;
        
        // If left child is smaller than root
        if (left < len && arr[left] < arr[largest]) largest = left;
        
        // If right child is smaller than smallest so far
        if (right < len && arr[right] < arr[largest]) largest = right;
        
        // If largest isn't root, swap root with the index of the
        // current largest
        if (largest != root) {
            let temp = arr[root];
            arr[root] = arr[largest];
            arr[largest] = temp;
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
    
    // Get min and remove minx
    extractMin() {
        // Swap max with last element
        let len = this.list.length;
        
        [this.list[0], this.list[len - 1]] = [this.list[len - 1], this.list[0]];
        
        let min = this.list.pop();
        
        // Heapify the list
        for (let root = Math.floor((this.list.length / 2) - 1); root >= 0; root--) {
            this.minHeapify(this.list, this.list.length, root);
        }
        
        return min;
    }
    
    getMax() {
        return this.list[0];
    }
    
    getMin() {
        return this.list[0];
    }
    
    len() {
        return this.list.length;
    }
    
    heapList() {
        return this.list;
    }
}

var MedianFinder = function() {
    this.small = new binHeap(); // keep smallest numbers in max heap
    this.large = new binHeap(); // keep largest numbers in min heap
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let val;
    
    // make sure every num in small is <= every num in large
    if ((this.small.len() !== 0) && (this.large.len() !==0) &&
       (num >= this.large.getMin())) {
        this.large.insertMinHeap(num);
    } else {
        this.small.insertMaxHeap(num);
    }
    
    // What if uneven size such that length diff is greater than 1?
    if (this.small.len() > (this.large.len() + 1)) {
        val = this.small.extractMax();
        this.large.insertMinHeap(val);
    }
    
    if (this.large.len() > (this.small.len() + 1)) {
        val = this.large.extractMin();
        this.small.insertMaxHeap(val);
    }
    
    // console.log("small: " + this.small.heapList());
    // console.log("large: " + this.large.heapList());
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.len() === this.large.len()) {
        return (this.small.getMax() + this.large.getMin()) / 2;
    }
    
    return this.small.len() > this.large.len() ? this.small.getMax() : this.large.getMin();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */