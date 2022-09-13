/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    if (obj[roman[i]] < obj[roman[i + 1]]) {
      sum += obj[roman[i]] * -1;
    } else {
      sum += obj[roman[i]];
    }
  }

  return sum;
}

module.exports = romanToDecimal;
