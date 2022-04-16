/**
 * from https://leetcode.com/discuss/interview-question/742791/front-end-interview-questions
 * problem 25
 */
 let arr = [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12]];

//  First method is using Array.prototype.concat()
 let flattened = [].concat(...arr);
 
 console.log("flattened1 = " + flattened);
 
 // Second method is to use a recursive function that recursively pushes
 // to a result array. It checks to make sure we're no longer looking at
 // an array data type and then pushes the element.
 function flatten(arr) {
   let result = [];
   
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       result = result.concat(flatten(arr[i]));
     } else {
       result.push(arr[i]);
     }
   }
   
   return result;
 }
 
 let flattened2 = flatten(arr);
 
 console.log("flattened2 = " + flattened2);