// Given a binary tree, return the sum of values of its deepest leaves.

// Example 1:
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

import java.util.HashMap;
import java.util.Map;

public class DeepestLeavesSum {
    Map<Integer, Integer> map;
    int deepLevel;

    public int deepestLeavesSum(TreeNode root) {
        map = new HashMap<>();
        deepLevel = 0;
        deepest(root, 0);
        return map.get(deepLevel);
    }

    private void deepest(TreeNode root, int level) {
        if (root == null)
            return;

        if (root.left == null && root.right == null) {
            map.put(level, map.getOrDefault(level, 0) + root.val);
            deepLevel = Math.max(deepLevel, level);
            return;
        }

        deepest(root.left, level + 1);
        deepest(root.right, level + 1);
    }
}