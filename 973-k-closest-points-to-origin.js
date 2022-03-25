// https://leetcode.com/problems/k-closest-points-to-origin/submissions/
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    if (points.length === k) return points;
    
    return quickSelect(0, points.length - 1, points, k);
};

function findDistance(point) {
    // console.log(point + " & squared: " + (point[0] ** 2 + point[1] ** 2));
    return point[0] ** 2 + point[1] ** 2;
}

function quickSelect(left, right, points, k) {
    let pivot, ptr;

    while (ptr !== k) {
        [pivot, ptr] = [findDistance(points[right]), left];
    
        for (let i = left; i < right; i++) {
            if (findDistance(points[i]) <= pivot) {
                [points[ptr], points[i]] = [points[i], points[ptr]];
                ptr++;
            }
        }

        [points[ptr], points[right]] = [points[right], points[ptr]];

        if (ptr > k) right = ptr - 1;
        else if (ptr < k) left = ptr + 1;
        
        // console.log(points);
    }
    
    // console.log(points);
    
    return points.slice(0, ptr); // 4, 136, 18, 29
}