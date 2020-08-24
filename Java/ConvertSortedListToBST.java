// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [0]
// Output: [0]
// Example 4:

// Input: head = [1,3]
// Output: [3,1]

public class ConvertSortedListToBST {
    private ListNode head;

    public TreeNode sortedListToBST(ListNode head) {
        int size = this.findSize(head);
        this.head = head;
        return convertListToBST(0, size - 1);
    }

    private int findSize(ListNode head) {
        ListNode ptr = head;
        int c = 0;
        while (ptr != null) {
            ptr = ptr.next;
            c += 1;
        }
        return c;
    }

    private TreeNode convertListToBST(int l, int r) {
        if (l > r)
            return null;
        int mid = (l + r) / 2;
        TreeNode left = this.convertListToBST(l, mid - 1);
        TreeNode node = new TreeNode(this.head.val);
        node.left = left;
        this.head = this.head.next;
        node.right = this.convertListToBST(mid + 1, r);
        return node;
    }
}