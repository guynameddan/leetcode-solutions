function binSearch(arr, left, right, target, successor) {
// if (totalUsers(arr, right) < target)  return binSearch(arr, right + 1, right * 2, target, successor);

while (right >= left) {
    // console.log(right);
    if (totalUsers(arr, right) < target)  return binSearch(arr, right + 1, right * 2, target, successor);

    let mid = left + Math.floor((right - left) / 2),
        users = totalUsers(arr, mid);
    
    console.log("left: " + left);
    console.log("mid: " + mid);
    console.log("right: " + right);
    console.log("users: " + users);

    if (users === target) return mid;
    
    if (users > target) return binSearch(arr, left, mid - 1, target, mid);
    
    return binSearch(arr, mid + 1, right, target, mid);
}



return successor;
}
  
function totalUsers(arr, days) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i] ** days;
    }

    // console.log("total: " + total);
    return total;
}
  
function getBillionUsersDay(growthRates) {

    return binSearch(growthRates, 0, 100, 1e9, 0);

}

let g1 = [1.1, 1.2, 1.3];

console.log(getBillionUsersDay(g1));
// console.log(j1e9);