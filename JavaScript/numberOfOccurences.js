// Write a functionthat returns the number of occurrences of an element in an array.

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

//solution
Array.prototype.numberOfOccurrences = function (n) {
    return this.filter(function (e) {
        return e == n;
    }).length;
};

//other solutions
Array.prototype.numberOfOccurrences = function (element) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] == element) { counter++; }
    }
    return counter;
}

Array.prototype.numberOfOccurrences = function (element) {
    return this.reduce(function (acc, current) {
        return current === element ? acc + 1 : acc;
    }, 0);
}