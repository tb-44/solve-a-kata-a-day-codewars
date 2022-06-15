// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  while (x != 0) {
    let tmp = x % 10;
    result = result * 10 + tmp;
    x = (x - tmp) / 10;
    if (result < -2147483648 || result > 2147483647) return 0;
  }
  return result;
};
