// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.

// Example 1:
// Input: k = 3, n = 7
// Output: [[1, 2, 4]]

// Example 2:
// Input: k = 3, n = 9
// Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  var result = [];
  back(1, 0, []);
  return result;

  function back(i, sum, comb) {
    if (comb.length == k) {
      if (sum == n) result.push([...comb]);
      return;
    }
    if (i > 9 || sum > n) return;

    comb.push(i);
    back(i + 1, sum + i, comb);
    comb.pop();
    back(i + 1, sum, comb);
  }
};
