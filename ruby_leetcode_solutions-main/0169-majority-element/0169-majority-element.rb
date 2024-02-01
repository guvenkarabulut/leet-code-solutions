# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    u_value = nums.uniq
  u_value.each do |letter|
     if nums.count(letter) > nums.length/2
      return letter
    end
  end
end