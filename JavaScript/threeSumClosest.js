// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Constraints:
// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => {
    return a - b;
  });

  let sum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sums = nums[i] + nums[left] + nums[right];
      if (Math.abs(sums - target) < Math.abs(sum - target)) {
        sum = sums;
      }
      if (sums > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return sum;
};
