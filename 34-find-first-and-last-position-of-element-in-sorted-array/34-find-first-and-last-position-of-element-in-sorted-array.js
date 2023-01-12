/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
        let left = 0;
    let right = nums.length - 1;
    let result = [];
    while (left <= right) {
        if (nums[left] === target) result.push(left);
        if (nums[right] === target) result.push(right)
        left++;
        right--;
    }
    result = result.sort((a, b) => a - b);
    if (result.length === 0) return [-1, -1];
    return [result[0], result[result.length - 1]]
};