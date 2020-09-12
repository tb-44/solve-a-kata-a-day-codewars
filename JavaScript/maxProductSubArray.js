// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let abs_max = nums[0];
  let pos_max = 1,
    neg_max = 1;

  for (let i = 0; i < nums.length; i++) {
    let t = posMax;
    pos_max = Math.max(Math.max(pos_max * nums[i], neg_max * nums[i]), nums[i]);
    neg_max = Math.min(Math.min(neg_max * nums[i], t * nums[i]), nums[i]);
    abs_max = Math.max(pos_max, abs_max);
  }
  return abs_max;
};
