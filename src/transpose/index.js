/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let row = array.length;
  let col = array[0].length;
  let transArr = [];
  for (let i = 0; i < col; i++) {
    let newRow = [];
    for (let j = 0; j < row; j++) {
      newRow.push(array[j][i]);
    }
    transArr.push(newRow);
  }

  return transArr;
}

module.exports = transpose;
