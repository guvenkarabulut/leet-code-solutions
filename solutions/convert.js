/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;
    let result = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += 2 * numRows - 2) {
            result += s[j];
            if (i !== 0 && i !== numRows - 1 && j + 2 * numRows - 2 - 2 * i < s.length) {
                result += s[j + 2 * numRows - 2 - 2 * i];
            }
        }
    }
    return result;
};