// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
  let m = new Map();
  let highDeg = 0;
  let minLen = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      let start = m.get(nums[i])[0];
      let deg = m.get(nums[i])[2];
      deg++;
      m.set(nums[i], [start, i, deg]);
      if (deg > highDeg) highDeg = deg;
    } else {
      let deg = 1;
      m.set(nums[i], [i, i, deg]);
      if (deg > highDeg) highDeg = deg;
    }
  }
  for (let key of m.keys()) {
    let x = m.get(key);
    if (x[2] === highDeg) {
      let y = x[1] - x[0] + 1;
      if (y < minLen) minLen = y;
    }
  }
  return minLen;
};
