# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    slow, fast = head, head
  while fast != nil && fast.next != nil
    slow = slow.next
    fast = fast.next.next
    if slow == fast
      return true
    end
    
  end
  return false
end