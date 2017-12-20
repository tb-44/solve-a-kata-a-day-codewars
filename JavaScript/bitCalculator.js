// In this kata your task is to create bit calculator. 
//Function arguments are two bit representation of numbers ("101","1","10"...), 
//and you must return their sum in decimal representation.

// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);
// parseInt and some Math functions are disabled.

// Those Math functions are enabled: pow,round,random

//solution
function calculate(num1, num2) {
    return toBase10(num1) + toBase10(num2)
}

function toBase10(s) {
    return s.split('').reverse()
        .map((e, index) => e == '1' ? Math.pow(2, index) : 0)
        .reduce((a, b) => a + b)
}

//others
function binToTen(num) {
    return num.split('').reverse().reduce(function (p, c, i) { return p + Math.pow(2, i) * c; }, 0);
}

function calculate(num1, num2) {
    return binToTen(num1) + binToTen(num2);
}

function calculate(num1, num2) {
    return binaryToDecimal(num1) + binaryToDecimal(num2);
}

function binaryToDecimal(b) {
    var arr = b.split('');
    var d = 0;
    for (var i = arr.length, j = 0; i > 0; i-- , j++) {
        if (arr[i - 1] == 1) { d += Math.pow(2, j) }
    }
    return d;
}

function calculate(num1, num2) {
    return parseInt2(num1) + parseInt2(num2);
}

function parseInt2(num) {
    var exp = 0;
    var rtn = 0;

    if (num.substr(0, 1) == '+' || num.substr(0, 1) == '-') {
        for (var i = num.length - 1; i >= 1; --i) {
            rtn += num.substr(i, 1) == '1' ? Math.pow(2, exp) : 0;
            ++exp;
        }

        return num.substr(0, 1) == '-' ? -rtn : rtn;
    } else {
        for (var i = num.length - 1; i >= 0; --i) {
            rtn += num.substr(i, 1) == '1' ? Math.pow(2, exp) : 0;
            ++exp;
        }

        return rtn;
    }
}
