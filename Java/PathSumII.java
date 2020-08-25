import java.util.ArrayList;
import java.util.List;

// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
// Note: A leaf is a node with no children.

// Example:
// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

public class PathSumII {
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        dfs(result, path, root, sum);
        return result;
    }

    private void dfs(List<List<Integer>> result, List<Integer> path, TreeNode root, int sum) {
        if (root == null)
            return;
        path.add(root.val);
        if (root.left == null && root.right == null) {
            if (sum == root.val)
                result.add(new ArrayList<>(path));
            path.remove(path.size() - 1);
            return;
        }
        dfs(result, path, root.left, sum - root.val);
        dfs(result, path, root.right, sum - root.val);
        path.remove(path.size() - 1);
    }
}