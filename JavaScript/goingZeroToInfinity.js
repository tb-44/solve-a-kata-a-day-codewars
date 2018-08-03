// Consider the following numbers (where n! is factorial(n)):

// u1 = (1 / 1!) * (1!)
// u2 = (1 / 2!) * (1! + 2!)
// u3 = (1 / 3!) * (1! + 2! + 3!)
// un = (1 / n!) * (1! + 2! + 3! + ... + n!)
// Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

// Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials?

// Task
// Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.

// To avoid discussions about rounding, return the result truncated to 6 decimal places, for example:

// 1.0000989217538616 will be truncated to 1.000098
// 1.2125000000000001 will be truncated to 1.2125
// Remark
// Keep in mind that factorials grow rather rapidly, and you need to handle large inputs.

function going(n) {
    let num = 1;
    let calc = 1;
    for (let i = n; i > 1; i--) {
        num *= i;
        calc += 1 / num;
    }
    return Math.floor(calc * 1e6) / 1e6;
}

//other solution
function going(n) {
    var running = 1;
    for (var i = 1; i < n; i++) running += 1 / Array.apply(0, Array(n - i)).reduce((p, c, j) => p * (j + i + 1), 1);
    return Math.floor(running * 1000000) / 1000000;
}