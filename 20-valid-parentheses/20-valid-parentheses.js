/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let boolean = true
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        } else {
            boolean = false
        }
    }
    if (stack.length > 0) {
        boolean = false
    }
    return boolean
};

