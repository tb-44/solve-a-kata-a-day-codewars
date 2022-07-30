// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = (nums) => {
  const hash = new Map();
  const majorElement = Math.floor(nums.length / 3);
  let elements = [];
  for (let n of nums) {
    hash[n] ? hash[n]++ : (hash[n] = 1);
  }
  for (let [key, value] of Object.entries(hash)) {
    if (value > majorElement) {
      elements.push(key);
    }
  }
  return elements;
};
