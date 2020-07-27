// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

public class TreeNode3 {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode3() {
    }

    TreeNode3(int val) {
        this.val = val;
    }

    TreeNode3(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder == null || postorder == null || inorder.length == 0 || postorder.length == 0)
            return null;

        int len = inorder.length;
        return buildTreeRecur(inorder, 0, len - 1, postorder, 0, len - 1);
    }

    private TreeNode buildTreeRecur(int[] inorder, int inStart, int inEnd, int[] postorder, int poStart, int poEnd) {
        if (inStart > inEnd)
            return null;
        int rootVal = postorder[poEnd];
        int rootIdx = 0;

        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == rootVal) {
                rootIdx = i;
                break;
            }
        }

        TreeNode root = new TreeNode(rootVal);
        int len = rootIdx - inStart;

        root.left = buildTreeRecur(inorder, inStart, rootIdx - 1, postorder, poStart, poStart + len - 1);
        root.right = buildTreeRecur(inorder, rootIdx + 1, inEnd, postorder, poStart + len, poEnd - 1);

        return root;
    }
}