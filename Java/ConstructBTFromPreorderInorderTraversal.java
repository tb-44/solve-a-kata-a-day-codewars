// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

import java.util.HashMap;
import java.util.Map;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
public class ConstructBTFromPreorderInorderTraversal {
    private Map<Integer, Integer> map = new HashMap<>();

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0)
            return null;

        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }

        return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    }

    private TreeNode build(int[] pre, int preStart, int preEnd, int[] in, int inStart, int inEnd) {
        TreeNode root = new TreeNode(pre[preStart]);
        int rootIndex = map.get(pre[preStart]);
        int left = rootIndex - inStart;
        int right = inEnd - rootIndex;

        if (left == 0)
            root.left = null;
        else if (left == 1)
            root.left = new TreeNode(in[inStart]);
        else
            root.left = build(pre, preStart + 1, preStart + left, in, inStart, rootIndex - 1);

        if (right == 0)
            root.right = null;
        else if (right == 1)
            root.right = new TreeNode(in[inEnd]);
        else
            root.right = build(pre, preStart + left + 1, preEnd, in, rootIndex + 1, inEnd);

        return root;
    }
}