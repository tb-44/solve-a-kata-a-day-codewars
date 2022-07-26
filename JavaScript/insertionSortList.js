// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

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
const insertionSortList = (head) => {
  if (!head || head === null) return head;
  let list = new ListNode(head.val, head);
  let current = head;
  let previous = list;

  while (current !== null) {
    if (previous.val <= current.val) {
      previous = current;
      current = current.next;
      continue;
    }
    let n = list;
    while (n.next.val <= current.val) {
      n = n.next;
    }
    let node = current.next;
    current.next = n.next;
    n.next = current;
    previous.next = node;
    current = node;
  }
  return list.next;
};
