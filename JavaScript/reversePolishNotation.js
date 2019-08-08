// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

function calc(expr) {
    let s = [];
    let i = expr.split(" ").map(function (e) {
        return isNaN(parseFloat(e)) ? e : parseFloat(e);
    });

    i.forEach(function (e) {
        if (typeof e === "string") {
            let oneOp = s.pop();
            let twoOp = s.pop();
            if (e === "+")
                s.push(oneOp + twoOp);
            if (e === "-")
                s.push(twoOp - oneOp);
            if (e === "*")
                s.push(twoOp * oneOp);
            if (e === "/")
                s.push(twoOp / oneOp);
        } else {
            s.push(e);
        }
    });
    return s.pop() || 0;
}