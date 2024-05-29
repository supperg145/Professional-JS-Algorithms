//Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square.
//Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments.
//You do not need to parse the grid from the program's input, but you can if you want to.
//You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.

function magicalSquare(array) {
  let diag1 = array[0] + array[4] + array[8];
  let diag2 = array[2] + array[4] + array[6];

  let row1 = array[0] + array[1] + array[2];
  let row2 = array[3] + array[4] + array[5];
  let row3 = array[6] + array[7] + array[8];

  let col1 = array[0] + array[3] + array[6];
  let col2 = array[1] + array[4] + array[7];
  let col3 = array[2] + array[5] + array[8];

  if (
    diag1 === diag2 &&
    diag1 === row1 &&
    diag1 === row2 &&
    diag1 === row3 &&
    diag1 === col1 &&
    diag1 === col2 &&
    diag1 === col3
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(magicalSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // Should retun true
console.log(magicalSquare([2, 7, 6, 9, 5, 1, 4, 3, 8])) //true
console.log(magicalSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]))
