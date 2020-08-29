// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

// Example 2:
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
public class RotateList {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        ListNode currentNode = head;
        int size = 0;

        while (currentNode != null) {
            currentNode = currentNode.next;
            size++;
        }

        k = k % size;
        int index = 1;
        currentNode = head;

        while (currentNode != null) {
            ListNode nextNode = currentNode.next;
            if (index == size - k) {
                currentNode.next = null;
                head = insertAtHead(head, nextNode);
            }
            currentNode = currentNode.next;
            index++;
        }
        return head;
    }

    public ListNode insertAtHead(ListNode node, ListNode target) {
        if (node == null) {
            return target;
        }
        if (target == null) {
            return node;
        }

        ListNode currentNode = target;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return target;
    }
}