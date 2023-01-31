
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    const result = [];
    let carry = 0;
    let i = num.length - 1;
    while (i >= 0 || k > 0) {
        const sum = (num[i] || 0) + (k % 10) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        k = Math.floor(k / 10);
        i--;
    }
    if (carry > 0) {
        result.push(carry);
    }
    return result.reverse();
    

};