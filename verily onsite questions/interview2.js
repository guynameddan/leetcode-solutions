/*
end 240

*/


// Given a two-toned image, remove all the islands of one of the tones.
// An island here is defined as a contiguous set of pixels where none of 
// the pixels in the set touch the edge of the image

img = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0]
]

// immediate = [
//   [2, 2, 0, 0, 0, 2, 0],
//   [0, 2, 0, 1, 0, 2, 2],
//   [0, 2, 0, 0, 0, 0, 0],
//   [0, 2, 2, 0, 1, 0, 0],
//   [0, 0, 2, 0, 1, 0, 2],
//   [0, 0, 0, 0, 0, 0, 0]
// ]


// output = [
//   [1, 1, 0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0, 1, 1],
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 1, 1, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0]
// ]

/*

how to check if island or if land or sea?

how to iterate through 2d array without visiting the same ones?

dfs

check to see if within bounds, if not 1 or if it's 0, extended from edge, keep track of what was visited, dfs calls itself
for each adjacent direction.



*/

// O(m*n*4^n)
for (let row = 0; row < img.length; row++) {
  for (let col = 0; col < img[0].length; col++) {
    if ((row == 0 || row == img.length -1 || col === 0 || col === img[0].length) && img[row][col] === 1) {
      dfs(row, col, img);
    }
  }
}

// O(m*n)
for (let row = 0; row < img.length; row++) {
  for (let col = 0; col < img[0].length; col++) {
    if (img[row][col] == 1) img[row][col] = 0;
    if (img[row][col] == 2) img[row][col] = 1;
  }
}

return img;


function dfs(row, col, img) {
  if (row < 0 || row > img.length - 1 || col < 0 || col > img[0].length - 1 || img[row][col] === 0 || img[row][col] === 2) {
    return
  }
  
  img[row][col] = 2;
  
  // call dfs for 4 adjacent directions
  dfs(row-1, col, img); // up
  dfs(row+1, col, img); //down
  dfs(row, col-1, img);
  dfs(row, col+1, img);
}

