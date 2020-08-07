// Given a binary tree, return the vertical order traversal of its nodes values.

// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// Example 1:

// Input: [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Explanation: 
// Without loss of generality, we can assume the root node is at position (0, 0):
// Then, the node with value 9 occurs at position (-1, -1);
// The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
// The node with value 20 occurs at position (1, -1);
// The node with value 7 occurs at position (2, -2).
// Example 2:

// Input: [1,2,3,4,5,6,7]
// Output: [[4],[2],[1,5,6],[3],[7]]
// Explanation: 
// The node with value 5 and the node with value 6 have the same position according to the given scheme.
// However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

/**
 * Definition for a binary tree node.
 */
public class TreeNode4 {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode4() {
    }

    TreeNode4(int val) {
        this.val = val;
    }

    TreeNode4(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    int min = 0, max = 0;
    Map<Integer, List<Integer>> map = new HashMap<>();

    public List<List<Integer>> verticalTraversal(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;
        Queue<TreeNode> qt = new LinkedList<>();
        Queue<Integer> qi = new LinkedList<>();
        qt.add(root);
        qi.add(0);
        while (!qt.isEmpty()) {
            int size = qt.size();
            Map<Integer, List<Integer>> tmp = new HashMap<>();
            for (int i = 0; i < size; i++) {
                TreeNode cur = qt.poll();
                int idx = qi.poll();
                if (!tmp.containsKey(idx))
                    tmp.put(idx, new ArrayList<Integer>());
                tmp.get(idx).add(cur.val);
                if (idx < min)
                    min = idx;
                if (idx > max)
                    max = idx;
                if (cur.left != null) {
                    qt.add(cur.left);
                    qi.add(idx - 1);
                }
                if (cur.right != null) {
                    qt.add(cur.right);
                    qi.add(idx + 1);
                }
            }
            for (int key : tmp.keySet()) {
                if (!map.containsKey(key))
                    map.put(key, new ArrayList<Integer>());
                List<Integer> list = tmp.get(key);
                Collections.sort(list);
                map.get(key).addAll(list);
            }

        }
        for (int i = min; i <= max; i++) {
            List<Integer> list = map.get(i);
            result.add(list);
        }
        return result;
    }
}