/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const len = s.length
    for (let i = 1; i <= len / 2; i++) {
        if (len % i === 0) {
            const sub = s.substring(0, i)
            let j = i
            while (j < len) {
                if (s.substring(j, j + i) !== sub) {
                    break
                }
                j += i
            }
            if (j === len) {
                return true
            }
        }
    }
    return false
};