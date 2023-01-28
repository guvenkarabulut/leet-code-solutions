/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let intToString = x.toString()
    let reversedString = intToString.split('').reverse().join('')
    if (intToString === reversedString) {
        return true
    }
    return false
};