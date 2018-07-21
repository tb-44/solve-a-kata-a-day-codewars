// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

function factorial(n) {
    if (n === 1) {
        return '1'
    }
    return mult(n.toString(), factorial(n - 1).toString());
}

function mult(x, y) {
    x = x.split('').reverse();
    y = y.split('').reverse();
    let result = [];

    for (let i = 0; x[i] >= 0; i++) {
        for (let j = 0; y[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += x[i] * y[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    return result.reverse().join('');
}