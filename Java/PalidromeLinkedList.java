// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class PalidromeLinkedList {
    private ListNode left = null;

    public boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) {
            return true;
        }
        left = head;
        return isPal(head);
    }

    private boolean isPal(ListNode right) {
        if (right == null) {
            return true;
        }
        if (!isPal(right.next)) {
            return false;
        }
        boolean result = left.val == right.val;
        left = left.next;
        return result;
    }
}