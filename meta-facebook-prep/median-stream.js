/**
 * https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=547645422524434&c=1119494428807035&ppid=5892836577408537&practice_plan=0
 * Median Stream
You're given a list of n integers arr[0..(n-1)]. You must compute a list output[0..(n-1)] such that, for each index i (between 0 and n-1, inclusive), output[i] is equal to the median of the elements arr[0..i] (rounded down to the nearest integer).
The median of a list of integers is defined as follows. If the integers were to be sorted, then:
If there are an odd number of integers, then the median is equal to the middle integer in the sorted order.
Otherwise, if there are an even number of integers, then the median is equal to the average of the two middle-most integers in the sorted order.
Signature
int[] findMedian(int[] arr)
Input
n is in the range [1, 1,000,000].
Each value arr[i] is in the range [1, 1,000,000].
Output
Return a list of n integers output[0..(n-1)], as described above.
Example 1
n = 4
arr = [5, 15, 1, 3]
output = [5, 10, 5, 4]
The median of [5] is 5, the median of [5, 15] is (5 + 15) / 2 = 10, the median of [5, 15, 1] is 5, and the median of [5, 15, 1, 3] is (3 + 5) / 2 = 4.
Example 2
n = 2
arr = [1, 2]
output = [1, 1]
The median of [1] is 1, the median of [1, 2] is (1 + 2) / 2 = 1.5 (which should be rounded down to 1).
 */
class minHeap {
  
    constructor() {
      this.list = [];
    }
    
    minHeapify(arr, heapSize, root) {
      let smallest = root,
          lChildIdx = 2 * root + 1,
          rChildIdx = 2 * root + 2;
      
      // if left child is smaller than root
      if (lChildIdx < heapSize && arr[lChildIdx] < arr[smallest]) smallest = lChildIdx;
      
      // if right child is smaller than than current smallest
      if (rChildIdx < heapSize && arr[rChildIdx] < arr[smallest]) smallest = rChildIdx;
      
      // if root isn't the smallest value, swap child with root/parent
      if (smallest !== root) {
        [arr[smallest], arr[root]] = [arr[root], arr[smallest]];
        
        // recursively heapify the affected sub-tree
        this.minHeapify(arr, heapSize, smallest);
      }
    }
    
    insert(num) {
      this.list.push(num);
      
      // min heapify
      for (let i = Math.floor(this.list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(this.list, this.list.length, i);
      }
    }
    
    getMin() {
      return this.list[0];
    }
  
    removeMin() {
      let len = this.list.length;
      
      // swap min with last element of heap
      [this.list[0], this.list[len - 1]] = [this.list[len - 1], this.list[0]];
      
      // remove the last element
      this.list.splice(len - 1);
      
      // heapify
      for (let i = Math.floor(this.list.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(this.list, this.list.length, i);
      }
    }
    
    // remove and return min
    extractMin() {
      let min = this.list[0];
      
      this.removeMin();
      
      return min;
    }
    
  }
  
  class maxHeap {
    
    constructor() {
      this.list = [];
    }
    
    maxHeapify(arr, heapSize, root) {
      let largest = root,
          lChildIdx = 2 * root + 1,
          rChildIdx = 2 * root + 2;
      
      // if left child is larger than root
      if (lChildIdx < heapSize && arr[lChildIdx] > arr[largest]) largest = lChildIdx;
      
      // if right child is larger than current largest
      if (rChildIdx < heapSize && arr[rChildIdx] > arr[largest]) largest = rChildIdx;
      
      // if root isn't the largest value, swap child with root/parent
      if (largest !== root) {
        [arr[largest], arr[root]] = [arr[root], arr[largest]];
        
        // recursively heapify the affected sub-tree
        this.maxHeapify(arr, heapSize, largest);
      }
    }
    
    insert(num) {
      this.list.push(num);
      
      // max heapify
      for (let i = Math.floor(this.list.length / 2 - 1); i >= 0; i--) {
        this.maxHeapify(this.list, this.list.length, i);
      }
    }
    
    getMax() {
      return this.list[0];
    }
    
    removeMax() {
      let len = this.list.length;
      
      // swap min with last element of heap
      [this.list[0], this.list[len - 1]] = [this.list[len - 1], this.list[0]];
      
      // remove the last element
      this.list.splice(len - 1);
      
      // heapify
      for (let i = Math.floor(this.list.length / 2 - 1); i >= 0; i--) {
        this.maxHeapify(this.list, this.list.length, i);
      }
    }
    
    // remove and return max
    extractMax() {
      let max = this.list[0];
      
      this.removeMax();
      
      return max;
    }
    
  }
  
  function findMedian(arr) {
    let large = new maxHeap(),
        small = new minHeap(),
        result = new Array(arr.length);
    
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 === 0) {
        large.insert(arr[i]);
        
        small.insert(large.extractMax());
        
        result[i] = Math.floor((large.getMax() + small.getMin()) / 2);
      } else {
        small.insert(arr[i]);
        
        large.insert(small.extractMin());
        
        result[i] = large.getMax();
      }
    }
    
    return result;
  }
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printintegerArray(array) {
    var size = array.length;
    var res = '';
    res += '[';
    var i = 0;
    for (i = 0; i < size; i++) {
      if (i !== 0) {
        res += ', ';
      }
      res += array[i];
    }
    res += ']';
    return res;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var expected_size = expected.length;
    var output_size = output.length;
    var result = true;
    if (expected_size != output_size) {
      result = false;
    }
    for (var i = 0; i < Math.min(expected_size, output_size); i++) {
      result &= (output[i] == expected[i]);
    }
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printintegerArray(expected);
      out += ' Your output: ';
      out += printintegerArray(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var arr_1 = [5, 15, 1, 3];
  var expected_1 = [5, 10, 5, 4];
  var output_1 = findMedian(arr_1);
  check(expected_1, output_1);
  
  var arr_2 = [2, 4, 7, 1, 5, 3];
  var expected_2 = [2, 3, 4, 3, 4, 3];
  var output_2 = findMedian(arr_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  