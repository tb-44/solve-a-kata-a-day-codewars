// Write a function that takes a string which has integers inside it separated by spaces, 
// and your task is to convert each integer in the string into an integer and return their sum.

//solution
function summy(stringOfInts) {
    let strInt = stringOfInts.split(' ');
    let parser = strInt.map(x => parseInt(x));
    let sum = parser.reduce((a, b) => a + b, 0);
    return sum;
}

//others solutions
function summy(s) {
    return s.split` `.reduce((a, b) => a + +b, 0)
}

function summy(stringOfInts) {
    nums = stringOfInts.split(' ')
    return nums.reduce((prev, curr) => prev + parseInt(curr), 0)
}