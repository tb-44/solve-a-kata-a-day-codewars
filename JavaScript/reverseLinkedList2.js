// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = (head, left, right) => {
  let prev = null;
  let curr = head;
  let node = 1;
  while (node < left) {
    node++;
    prev = curr;
    curr = curr.next;
  }
  let end = curr;
  let prevNode = null;
  let currNode = curr;
  while (node < right + 1) {
    node++;
    [currNode.next, prevNode, currNode] = [prevNode, currNode, currNode.next];
  }

  if (prev) prev.next = prevNode;
  if (end) end.next = currNode;
  return left === 1 ? prevNode : head;
};
