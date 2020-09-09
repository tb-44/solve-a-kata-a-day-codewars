// Compare two version numbers version1 and version2.
// If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.

// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
// You may assume the default revision number for each level of a version number to be 0. For example, version number 3.4 has a revision number of 3 and 4 for its first and second level revision number. Its third and fourth level revision number are both 0.

// Example 1:
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const v1_num = parseInt(v1[i] || 0);
    const v2_num = parseInt(v2[i] || 0);
    if (v1_num == v2_num) continue;
    return v1_num > v2_num ? 1 : -1;
  }
  return 0;
};
