// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  if (nums === null || nums.length === 0) return;
  let offset = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, offset - 1);
  reverse(nums, offset, nums.length - 1);
};

const reverse = (nums, start, end) => {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};
