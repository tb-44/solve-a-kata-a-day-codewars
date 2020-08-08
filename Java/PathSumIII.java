// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

import java.util.HashSet;
import java.util.Set;

public class PathSumIII {
    int val;
    TreeNode left;
    TreeNode right;

    PathSumIII() {}

    PathSumIII(int val) {
        this.val = val;
    }

    PathSumIII(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    class Solution {
        int obj;
        Set<TreeNode> hit;

        public int pathSum(TreeNode root, int sum) {
            obj = sum;
            hit = new HashSet<TreeNode>();
            return pathSumHelper(root, sum, false);
        }

        public int pathSumHelper(TreeNode root, int sum, boolean hasParent) {
            if (root == null)
                return 0;

            if (sum == obj && hit.contains(root) && !hasParent)
                return 0;
            if (sum == obj && !hasParent)
                hit.add(root);

            int counter = (root.val == sum) ? 1 : 0;
            counter += pathSumHelper(root.left, sum - root.val, true);
            counter += pathSumHelper(root.right, sum - root.val, true);
            counter += pathSumHelper(root.left, obj, false);
            counter += pathSumHelper(root.right, obj, false);
            return counter;
        }
    }
}