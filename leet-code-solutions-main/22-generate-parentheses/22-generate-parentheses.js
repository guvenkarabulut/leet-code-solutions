/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    let generate = function (left, right, n, s) {
        if (left == n && right == n) {
            result.push(s)
            return;
        }
        if (left < n) {
            generate(left + 1, right, n, s + "(")
        }
        if (left > right) {
            generate(left, right + 1, n, s + ")")
        }
    }
    generate(0, 0, n, "")
    return result;
};