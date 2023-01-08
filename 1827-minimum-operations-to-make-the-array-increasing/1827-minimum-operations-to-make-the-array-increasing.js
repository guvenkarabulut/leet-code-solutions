/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    var length=nums.length
    if (length===1) return 0
    var result=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=nums[i+1]){
           let sum = nums[i]-nums[i+1]+1
            result += sum;
            nums [i+1] +=sum
        }
    }
return result
};