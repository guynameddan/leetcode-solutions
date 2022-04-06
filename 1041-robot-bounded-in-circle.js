// https://leetcode.com/problems/robot-bounded-in-circle/solution/
/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
    // 0 = north, 1 = east, 2 = south, 3 = west
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]],
        [x, y] = [0, 0],
        currDirection = 0; // 0 is north
    
    for (let char of instructions) {
        if (char === 'L') currDirection = (currDirection + 3) % 4;
        else if (char === 'R') currDirection = (currDirection + 1) % 4;
        else {
            x += directions[currDirection][0];
            y += directions[currDirection][1];
        }
    }
    
    return ((x === 0 && y === 0) || currDirection !== 0);
};