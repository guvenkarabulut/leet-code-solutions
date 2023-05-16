/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";
    for (let i = 1; i < n; i++) {
        let count = 1;
        let temp = "";
        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                temp += count + result[j];
                count = 1;
            }
        }
        result = temp;
    }
    return result;
};