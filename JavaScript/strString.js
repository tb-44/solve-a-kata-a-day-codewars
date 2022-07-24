// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (!haystack.includes(needle)) return -1;
  let n = needle.length;
  for (let i = 0; i < haystack.length - n + 1; i++) {
    if (haystack.substring(i, i + n) === needle) {
      return i;
    }
  }
  return -1;
};
