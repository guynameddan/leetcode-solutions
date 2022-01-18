/*

string 1 2 * 3 +

iterate through string

whenever we get a number maybe we push the number to an array after converting to number

whenever we have an operation char we do whatever the operation is

[1, 2]

iterate through array and multiply the elements

[2, 3]

iterate through array and add the elements

then return the result

"12 1 +"

[12, 1, +]

[1, 2, *, 3, -]

nums = [2, 3]
*/

function solve(polishStr) {
  let nums = [],
      temp = 0,  
      polishArr = polishStr.split(" ");
  
  //console.log(polishArr);
  
  for (let i = 0; i < polishArr.length; i++) {
    if (typeof parseInt(polishArr[i]) === "number") {
      // console.log(parseInt(polishArr[i]));
      nums.push(parseInt(polishArr[i]))
    }
    
    console.log(nums);
    
    if (polishArr[i] === '*') {
      temp = 1;
      for (let i = 0; i < nums.length; i++) {
         temp *= nums[i]
      }
      nums = [];
      nums.push(temp);
    }
    
    if (polishArr[i] === '+') {
      for (let i = 0; i < nums.length; i++) {
         temp += nums[i]
      }
      nums = [];
      nums.push(temp);
    }
    
    if (polishArr[i] === '-') {
      temp = nums[0]
      
      for (let i = 1; i < nums.length; i++) {
         temp -= nums[i]
      }
      nums = [];
      nums.push(temp);
    }
    
    if (polishArr[i] === '/') {
      temp = nums[0];
      
      for (let i = 0; i < nums.length; i++) {
         temp /= nums[i]
      }
      nums = [];
      nums.push(temp);
    }
  }
  
  //console.log(nums);
  
  if (nums.length != 1) return false;
  else return nums[0]
}

console.log(solve("12 1 +"));