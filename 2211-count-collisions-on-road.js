// https://leetcode.com/problems/count-collisions-on-a-road/
/**
 * @param {string} directions
 * @return {number}
 */
 var countCollisions = function(directions) {
    let count = 0,
        leftCars = 0,
        rightCars = 0;
    
    // Go from left to right and pretend this
    // is from the perspective of a right car.
    // Any cars going left will be summed and
    // added to the total count of collisions.
    for (let car of directions) {
        if (car === 'L') count += leftCars;
        else leftCars = 1
    }
    
    // Now we'll go backwards from the perspective
    // a car going left. Any right cars will either
    // count towards the total collisions or not if
    // there aren't any
    
    for (let i = directions.length - 1; i >= 0; i--) {
        if (directions[i] === 'R') count += rightCars;
        else rightCars = 1;
    }
    
    return count;
};