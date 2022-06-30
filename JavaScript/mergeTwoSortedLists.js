function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode(0);
  let merged = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      merged.next = list1;
      list1 = list1.next;
    } else {
      merged.next = list2;
      list2 = list2.next;
    }

    merged = merged.next;
  }

  if (list1) {
    merged.next = list1;
  } else {
    merged.next = list2;
  }

  return head.next;
};
