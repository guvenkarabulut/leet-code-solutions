# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def largest_sum_after_k_negations(nums, k)
  k.times do
    min_index = nums.index(nums.min)
    nums[min_index] = -nums[min_index]
  end
  nums.sum
end