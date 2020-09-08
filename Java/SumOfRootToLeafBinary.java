// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
// Return the sum of these numbers.

// Example 1:
// Input: [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

import java.util.ArrayList;
import java.util.List;

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
public class SumOfRootToLeafBinary {
    public int sumRootToLeaf(TreeNode root) {
        List<String> list = new ArrayList<>();
        helper(list, root, new StringBuilder().append(Integer.toString(root.val)));
        int result = 0;
        for (String s : list) {
            result += Integer.parseInt(s, 2);
        }
        return result;
    }

    private void helper(List<String> list, TreeNode root, StringBuilder sb) {
        if (root == null)
            return;

        if (root.left == null && root.right == null) {
            list.add(sb.toString());
            return;
        }

        if (root.left != null) {
            sb.append(Integer.toString(root.left.val));
            helper(list, root.left, sb);
            sb.deleteCharAt(sb.length() - 1);
        }
        if (root.right != null) {
            sb.append(Integer.toString(root.right.val));
            helper(list, root.right, sb);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}
