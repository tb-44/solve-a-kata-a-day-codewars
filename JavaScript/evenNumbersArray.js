// Instructions
// Output
// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//solution
function evenNumbers(array, number) {
    var filtered = array.filter(function (n) {
        if (n % 2 === 0)
            return n + 1
    })
    return filtered.slice(-number)
}

//others solution:
const evenNumbers = (A, n) => A.filter(x => x % 2 == 0).splice(-n)

function evenNumbers(array, number) {
    return array.filter(value => value % 2 === 0).slice(-number);
}