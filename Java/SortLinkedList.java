// Sort a linked list in O(n log n) time using constant space complexity.

// Example 1:
// Input: 4->2->1->3
// Output: 1->2->3->4

// Example 2:
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class SortLinkedList {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null)
            return head;

        ListNode slow = head, fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode newHead = slow.next;
        slow.next = null;

        ListNode l1 = sortList(head);
        ListNode l2 = sortList(newHead);

        return merge(l1, l2);
    }

    private ListNode merge(ListNode head1, ListNode head2) {

        ListNode dummy = new ListNode(0);
        ListNode prev = dummy;
        while (head1 != null && head2 != null) {

            if (head1.val < head2.val) {
                prev.next = head1;
                head1 = head1.next;
            } else {
                prev.next = head2;
                head2 = head2.next;
            }
            prev = prev.next;
        }

        if (head1 != null) {
            prev.next = head1;
        } else {
            prev.next = head2;
        }

        return dummy.next;
    }
}