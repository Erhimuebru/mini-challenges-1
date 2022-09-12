/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    if(str.length % 2 != 0) return "invalid";
    if(str[0] == '}' || str[0] == ']' || str[0] == ')') return "invalid"
    let openBracketArr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] == '(' || str[i] == '[' || str[i] == '{') {
            openBracketArr.push(str[i]);
        }else if(str[i] == ')' || str[i] == ']' || str[i] == '}') {

            if(openBracketArr[openBracketArr.length - 1] == '(' && str[i] == ')') {
                openBracketArr.pop()
            }else if(openBracketArr[openBracketArr.length - 1] == '[' && str[i] == ']') {
                openBracketArr.pop()
            }else if(openBracketArr[openBracketArr.length - 1] == '{' && str[i] == '}') {
                openBracketArr.pop()
            }else {
                return 'invalid';
            }
        }
    }

    if(openBracketArr.length == 0) {
        return 'valid'
    }else {
        return 'invalid';
    }
}

module.exports = isValid;
