// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class BTPostOrderTraversal {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null)
            return result;

        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode t = stack.peek();
            if (t.left == null && t.right == null) {
                TreeNode p = stack.pop();
                result.add(p.val);
            }

            else {
                if (t.right != null) {
                    stack.push(t.right);
                    t.right = null;
                }

                if (t.left != null) {
                    stack.push(t.left);
                    t.left = null;
                }
            }
        }
        return result;
    }
}