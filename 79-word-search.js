// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const [ROWS, COLS] = [board.length, board[0].length];
    let path = new Set();
    
    function dfs(r, c, i) {
        if (i === word.length) return true; // found the word in board
        
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || // check if coordinates are within the size of matrix
            word[i] != board[r][c] || // check current letter is same as current element
            path.has(`${r}, ${c}`)) return false; // check if current element has already been visited
        
        path.add(`${r}, ${c}`); // mark as visited
        
        let res = (dfs(r + 1, c, i + 1) || // down
                dfs(r - 1, c, i + 1) || // up
                dfs(r, c + 1, i + 1) || // right
                dfs(r, c - 1, i + 1));  // left
        
        path.delete(`${r}, ${c}`); // backtrack
        
        return res;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }
    
    return false;

    // time complexity: O(m x n x (4^word.length))
};