let queue = [];

queue.push(root);

while (queue.length > 0) {
    currentNode = queue.shift();

    // check or condition
    if (blahblahblah) {
        do this
    }

    if (queue.left) queue.push(left);
    if (queue.right) queue.push(right);

    //left
    if (left cell is within bounds and not a wall) queue.push(left cell);
    //right
    if (right cell is within bounds and not a wall) queue.push(right cell);
    //top
    if (top cell is within bounds and not a wall) queue.push(top cell);
    //bottom
    if (bottom cell is within bounds and not a wall) queue.push(bottom cell);

}

