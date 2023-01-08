/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if(head === null) return null
    let count = 0
    let dummy = new ListNode()
    dummy.next = head
    let first = dummy
    let second = dummy
    while (count <= n) {
        first = first.next
        count++
    }
    while (first !== null) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dummy.next
};