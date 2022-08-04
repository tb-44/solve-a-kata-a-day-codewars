// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result[0] = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      result[1] = i;
      break;
    }
  }
  return result;
};
