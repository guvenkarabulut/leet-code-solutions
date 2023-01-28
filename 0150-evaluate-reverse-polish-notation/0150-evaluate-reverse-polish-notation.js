/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]
        if (token === '+') {
            stack.push(stack.pop() + stack.pop())
        }
        else if (token === '-') {
            stack.push(-stack.pop() + stack.pop())
        }
        else if (token === '*') {
            stack.push(stack.pop() * stack.pop())
        }
        else if (token === '/') {
            const a = stack.pop()
            const b = stack.pop()
            stack.push(parseInt(b / a))
        }
        else {
            stack.push(parseInt(token))
        }
    }
    return stack.pop()
};