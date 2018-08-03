// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.


function expressionMatter(a, b, c) {
    let i1 = a * (b + c),
        i2 = a * b * c,
        i3 = a + b * c,
        i4 = (a + b) * c,
        i5 = a + b + c,
        i6 = (a * c) + b;

    let arr = [i1, i2, i3, i4, i5, i6];
    let largest = arr.sort(function (a, b) {
        return a - b
    });
    return largest[arr.length - 1];
}

//others
function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}