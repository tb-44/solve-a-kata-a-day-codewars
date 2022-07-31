// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = (n) => {
  let set = new Set();
  while (1) {
    n = squareSum(n);
    if (n == 1) return true;
    if (set.has(n)) return false;
    set.add(n);
  }
};

function squareSum(n) {
  let sum = 0;
  while (n !== 0) {
    sum += (n % 10) * (n % 10);
    n = parseInt(n / 10);
  }
  return sum;
}
