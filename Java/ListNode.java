// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    public ListNode removeElements(ListNode head, int val) {
        if (head == null) {
            return head;
        }

        ListNode sub = new ListNode(0);
        sub.next = head;
        ListNode ln = sub;
        while (ln.next != null) {
            if (ln.next.val == val) {
                ln.next = ln.next.next;
            } else {
                ln = ln.next;
            }
        }
        return sub.next;
    }
}
