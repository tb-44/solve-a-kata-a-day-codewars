// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
const brackets = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(brackets[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
