// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  let result = [];
  const getCombinations = (left, right, partial) => {
    if (left > right) return;
    if (!left && !right) result.push(partial);
    if (left > 0) getCombinations(left - 1, right, partial + "(");
    if (right > 0) getCombinations(left, right - 1, partial + ")");
  };

  getCombinations(n, n, "");
  return result;
};
