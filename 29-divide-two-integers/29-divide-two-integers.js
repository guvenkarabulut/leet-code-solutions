/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        if (dividend > -Math.pow(2, 31)) {
            return -dividend;
        } else {
            return Math.pow(2, 31) - 1;
        }
    }

    let result = dividend / divisor;
    if (result < 0) {
        return Math.ceil(result);
    }
    return Math.floor(result);
};
