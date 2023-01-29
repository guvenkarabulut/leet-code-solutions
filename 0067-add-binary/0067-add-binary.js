/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let x = i >= 0 ? a[i] - '0' : 0;
        let y = j >= 0 ? b[j] - '0' : 0;
        let temp = x + y + carry;
        carry = Math.floor(temp / 2);
        sum = (temp % 2) + sum;
        i--;
        j--;
    }
    if (carry) {
        sum = carry + sum;
    }
    return sum;


};