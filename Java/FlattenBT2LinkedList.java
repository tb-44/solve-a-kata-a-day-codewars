// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
public class FlattenBT2LinkedList {
    public TreeNode last = null;

    public void flatten(TreeNode root) {
        if (root == null) {
            return;
        }

        if (last != null) {
            last.left = null;
            last.right = root;
        }

        last = root;
        TreeNode right = root.right;
        flatten(root.left);
        flatten(right);
    }
}