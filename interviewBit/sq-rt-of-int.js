// https://www.interviewbit.com/problems/square-root-of-integer/
module.exports = { 
    //param A : integer
    //return an integer
       sqrt : function(A){
           return binSearch(0, 10, 0, A);
       }
   };
   
   function binSearch(left, right, successor, target) {
       while (right >= left) {
           if (right * right < target) return binSearch(right + 1, right * 2, successor, target);
   
           let mid = left + Math.floor((right - left)/2),
               product = mid * mid;
   
           if (product === target) return mid;
           
           if (product < target) return binSearch(mid + 1, right, mid, target);
           
           return binSearch(left, mid - 1, mid, target);
       }
   
       return (successor * successor > target ? successor - 1 : successor);
   }