/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let intToString = x.toString()
    let reversedString = intToString.split('').reverse().join('')
    let reversedInt = parseInt(reversedString)
    if (reversedInt > 2147483647 || reversedInt < -2147483648) {
        return 0
    }
    if (x < 0) {
        return -reversedInt
    }
    return reversedInt
};