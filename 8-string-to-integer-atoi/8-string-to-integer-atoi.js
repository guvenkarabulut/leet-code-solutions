/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim()
    if (s[0] === ('+') && s[1] === ('-')) return 0
    if (s[0] === ('-') && s[1] === ('+')) return 0
    if (s.length === 0) return 0

    let sign = 1
    if (s[0] === '-') { sign = -1 } else { sign = 1 }
    if (s[0] === '-' || s[0] === '+') s = s.slice(1)
    if (s[0] === (' ') || s[0] === ('+') || s[0] === ('-')) return 0
    let num = parseInt(s) * sign
    if (isNaN(num)) return 0
    if (num > 2147483647) return 2147483647
    if (num < -2147483648) return -2147483648
    return num
};
