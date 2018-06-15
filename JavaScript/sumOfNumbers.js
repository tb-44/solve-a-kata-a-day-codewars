// Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function GetSum(a, b) {
    let sumNumbers = 0;

    if (a === b) {
        return a;

    } else if (a < b) {
        for (a; a <= b; a++) {
            sumNumbers += a;
        }
    } else if (b < a) {
        for (b; b <= a; b++) {
            sumNumbers += b;
        }
    }
    return sumNumbers;
}