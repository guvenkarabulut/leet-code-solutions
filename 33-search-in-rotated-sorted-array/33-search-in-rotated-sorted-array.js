/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        left++;
        right--;
    }
    return -1;
};