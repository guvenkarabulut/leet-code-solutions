# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_symmetric(root)
    return true if root.nil?
    is_mirror(root.left, root.right)
end

def is_mirror(left, right)
    return true if left.nil? && right.nil?
    return false if left.nil? || right.nil?
    
    left.val == right.val &&
      is_mirror(left.left, right.right) &&
      is_mirror(left.right, right.left)
end