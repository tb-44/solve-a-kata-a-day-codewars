// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
  return integer
    .toString()
    .split("")
    .reduce((x, y) => x + (+y || 0), 0);
}
