// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = (root) => {
  if (!root) return 0;
  const numbers = [];
  bfs(root, "");

  function bfs(node, num) {
    num += String(node.val);
    if (!node.left && !node.right) {
      numbers.push(parseInt(num));
    }
    if (node.right) {
      bfs(node.right, num);
    }
    if (node.left) {
      bfs(node.left, num);
    }
  }
  return numbers.reduce((a, b) => a + b);
};
