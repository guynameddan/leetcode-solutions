// https://leetcode.com/problems/minimum-time-to-complete-trips/
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
 var minimumTime = function(time, totalTrips) {

    return binSearch(time, 1, 1e8, 0, totalTrips);
    
};

function binSearch(time, left, right, successor, target) {
    while (right >= left) {
        if (findTotalTrips(time, right) < target) return binSearch(time, right + 1, right * 2, successor, target);
        
        let mid = left + Math.floor((right - left) / 2);
        
        if (findTotalTrips(time, mid) >= target) return binSearch(time, left, mid - 1, mid, target);
        
        return binSearch(time, mid + 1, right, mid, target);
    }
    
    return successor;
}
    
function findTotalTrips(time, t) {
    let total = 0;
    
    for (let i = 0; i < time.length; i++) {
        total += Math.floor(t / time[i]);
    }
    
    return total;
}