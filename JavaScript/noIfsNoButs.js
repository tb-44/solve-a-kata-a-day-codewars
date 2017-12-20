// Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.

// There's only one problem...

// You can't use if statements, and you can't use shorthands like (a < b)?true:false;

// in fact the word "if" and the character "?" are not allowed in the code.

// Inputs are guarenteed to be numbers

//solution
var noIfsNoButs = function (a, b) {
    switch (true) {
        case (a == b): return a.toString() + " is equal to " + b.toString();
            break;
        case (a > b): return a.toString() + " is greater than " + b.toString();
            break;
        case (a < b): return a.toString() + " is smaller than " + b.toString();
            break;
    }
}

//other's
var noIfsNoButs = function (a, b) {
    switch (Math.sign(a - b)) {
        case 1: return `${a} is greater than ${b}`;
        case -1: return `${a} is smaller than ${b}`;
        case 0: return `${a} is equal to ${b}`;
    }
}

const noIfsNoButs = (a, b) =>
    a < b && `${a} is smaller than ${b}` ||
    a > b && `${a} is greater than ${b}` ||
    `${a} is equal to ${b}`