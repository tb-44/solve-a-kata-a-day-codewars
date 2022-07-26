// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  let stack = [];
  for (const t of tokens) {
    if (t === "+" || t === "-" || t === "*" || t === "/") {
      let t1 = stack.pop();
      let t2 = stack.pop();
      let op = opsEval(t1, t2, t);
      stack.push(op);
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack[0];
};

const opsEval = (num1, num2, op) => {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num2 - num1;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return Math.trunc(num2 / num1);
  }
};
