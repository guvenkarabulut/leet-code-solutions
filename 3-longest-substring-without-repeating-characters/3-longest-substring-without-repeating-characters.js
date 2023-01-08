/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const sub = s.substring(i, j);
            if (sub.indexOf(s[j]) === -1) {
                max = Math.max(max, sub.length + 1);
            } else {
                break;
            }
        }
    }
    if (s.length === 0) max = 0;
    if (s.length === 1) max = 1;
    return max;
};
