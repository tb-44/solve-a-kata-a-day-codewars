// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let list = new ListNode(null, head);
  let curr = list;

  while (curr.next && curr.next.next) {
    const curr1 = curr.next;
    const curr2 = curr.next.next;
    curr1.next = curr2.next;
    curr2.next = curr1;
    curr.next = curr2;
    curr = curr.next.next;
  }
  return list.next;
};
