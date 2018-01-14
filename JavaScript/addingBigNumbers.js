// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

//solution
function add(a, b) {

    let arrA = a.split('').reverse();
    let arrB = b.split('').reverse();

    let addToIndex = Math.max(arrA.length, arrB.length);
    let addTwoNums;
    let getRemainder;
    let carryTheOne = 0;
    let totalArr = [];

    for (let i = 0; i < addToIndex; i++) {

        addTwoNums = Number(arrA[i]) + Number(arrB[i]) + carryTheOne;

        if (!arrA[i]) {
            getRemainder = Number(arrB[i]) + carryTheOne
            totalArr.push(getRemainder % 10);
            getRemainder % 10 === 0 ? carryTheOne = 1 : carryTheOne = 0;

        } else if (!arrB[i]) {
            getRemainder = Number(arrA[i]) + carryTheOne
            totalArr.push(getRemainder % 10);
            getRemainder % 10 === 0 ? carryTheOne = 1 : carryTheOne = 0;

        } else if (addTwoNums > 9) {
            totalArr.push(addTwoNums % 10);
            carryTheOne = 1;

        } else {
            totalArr.push(addTwoNums);
            carryTheOne = 0;
        }

    }
    if (carryTheOne === 1) totalArr.push(1);

    return totalArr.reverse().join('');
}