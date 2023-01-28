/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    let result = []
    if (digits.length === 0) return result
    let dfs = (index, str) => {
        if (index === digits.length) {
            result.push(str)
            return
        }
        let letters = map[digits[index]]
        for (let i = 0; i < letters.length; i++) {
            dfs(index + 1, str + letters[i])
        }
    }
    dfs(0, '')
    return result
};
