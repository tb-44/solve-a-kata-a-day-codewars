// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.

// Follow up:
// Could you do this in one pass?

public class NthNodeFromEnd {
    int val;
    ListNode next;

    NthNodeFromEnd() {
    }

    NthNodeFromEnd(int val) {
        this.val = val;
    }

    NthNodeFromEnd(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    class Solution {
        public ListNode removeNthFromEnd(ListNode head, int n) {
            ListNode node = new ListNode(0);
            node.next = head;
            int len = 0;
            ListNode start = head;
            while (start != null) {
                len++;
                start = start.next;
            }
            len -= n;
            start = node;
            while (len > 0) {
                len--;
                start = start.next;
            }
            start.next = start.next.next;
            return node.next;
        }
    }
}