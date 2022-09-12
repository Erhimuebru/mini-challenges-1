/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {}

module.exports = romanToDecimal;
function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}

// Finds the decimal value of a
// given roman numeral
function romanToDecimal( str)
{
 
    // Initialize the result
    var res = 0;

    for (i = 0; i < str.length; i++)
    {
     
        // Getting the value of symbol s[i]
        var s1 = value(str.charAt(i));

        // Getting the  value of symbol s[i+1]
        if (i + 1 < str.length) {
            var s2 = value(str.charAt(i + 1));

            // Comparing both the values
            if (s1 >= s2) {
                // Value of the current symbol
                // is greater or equalto
                // the next symbol
                res = res + s1;
            }
            else
            {
             
                // Value of the current symbol is
                // less than the next symbol
                res = res + s2 - s1;
                i++;
            }
        } else {
            res = res + s1;
        }
    }

    // return the value of res;
    console.log(res)
}

romanToDecimal("MMCDXLVIII")