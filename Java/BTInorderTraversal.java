// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class BTInorderTraversal {
    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();

        TreeNode rt = root;
        while (rt != null) {
            stack.push(rt);
            rt = rt.left;
        }

        while (!stack.isEmpty()) {
            TreeNode tn = stack.pop();
            result.add(tn.val);
            tn = tn.right;

            while (tn != null) {
                stack.push(tn);
                tn = tn.left;
            }
        }
        return result;
    }
}