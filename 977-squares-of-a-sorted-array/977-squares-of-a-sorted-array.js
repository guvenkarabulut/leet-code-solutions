/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i]);
    }
    return result.sort((a, b) => a - b);
};