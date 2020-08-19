import java.util.LinkedList;

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

public class SymmetricTree {
    int val;
    TreeNode left;
    TreeNode right;

    SymmetricTree() {}

    SymmetricTree(int val) {
        this.val = val;
    }

    SymmetricTree(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
      
    public boolean isSymmetric(TreeNode root) {
        if (root == null || root.left == null && root.right == null)
            return true;
        if (root.left == null || root.right == null)
            return false;

        LinkedList<TreeNode> t1 = new LinkedList<TreeNode>();
        LinkedList<TreeNode> t2 = new LinkedList<TreeNode>();
        t1.add(root.left);
        t2.add(root.right);

        while (!t1.isEmpty() && !t2.isEmpty()) {
            TreeNode n1 = t1.poll();
            TreeNode n2 = t2.poll();

            if (n1.val != n2.val)
                return false;
            if ((n1.left == null && n2.right != null) || (n1.left != null && n2.right == null))
                return false;
            if ((n1.right == null && n2.left != null) || (n1.right != null && n2.left == null))
                return false;

            if (n1.left != null && n2.right != null) {
                t1.add(n1.left);
                t2.add(n2.right);
            }

            if (n1.right != null && n2.left != null) {
                t1.add(n1.right);
                t2.add(n2.left);
            }
        }
        return true;
    }
}