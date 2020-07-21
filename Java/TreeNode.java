
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 * Definition for a binary tree node.
 */
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    class Solution {
        public java.util.List<Integer> levelOrderBottom(TreeNode root) {

            List<Integer> list = new ArrayList<>();
            LinkedList<TreeNode> q = new LinkedList<TreeNode>();
            if (root != null) {
                q.offer(root);
            }

            while (!q.isEmpty()) {
                int qSize = q.size();
                List<Integer> intList = new ArrayList<>();

                for (int i = 0; i < qSize; i++) {
                    TreeNode tn = q.poll();
                    intList.add(tn.val);
                    if (tn.left != null) {
                        q.offer(tn.left);
                    }
                    if (tn.right != null) {
                        q.offer(tn.right);
                    }
                }
                list.addAll(intList);
            }

            Collections.reverse(list);
            return list;
        }
    }

}