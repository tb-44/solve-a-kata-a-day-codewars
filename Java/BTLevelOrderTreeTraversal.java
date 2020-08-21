// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BTLevelOrderTreeTraversal {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;

        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while (!q.isEmpty()) {
            int levelLen = q.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < levelLen; i++) {
                TreeNode n = q.poll();
                level.add(n.val);

                if (n.left != null)
                    q.offer(n.left);

                if (n.right != null)
                    q.offer(n.right);
            }
            result.add(level);
        }
        return result;
    }
}