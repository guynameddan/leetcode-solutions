// https://www.interviewbit.com/problems/rotated-sorted-array-search/
module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       search : function(A, B){
           return binSearch(A, 0, A.length - 1, B)
       }
   };
   
   function binSearch(arr, left, right, target) {
       while (left <= right) {
           let mid = left + Math.floor((right - left)/2);
   
           if (arr[mid] === target) return mid;
   
           // if left side is sorted
           if (arr[left] < arr[mid]) {
               if (arr[left] <= target && target < arr[mid]) return binSearch(arr, left, mid - 1, target);
               else return binSearch(arr, mid + 1, right, target);
           } else { // else it's sorted on right side
               if (arr[mid] < target && target <= arr[right]) return binSearch(arr, mid + 1, right, target);
               else return binSearch(arr, left, mid - 1, target);
           }
       }
   
       return -1;
   }