// Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//solution
var moveZeros = function (arr) {
    var zeros = [];
    var moveZeroes = [];

    arr.forEach(function (e) {
        if (e === 0) {
            zeros.push(e);
        } else {
            moveZeroes.push(e);
        }
    });

    return moveZeroes.concat(zeros);
}

var moveZeros = function (arr) {
    return arr.filter(function (x) { return x !== 0 }).concat(arr.filter(function (x) { return x === 0; }));
}

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num) { return num !== 0; });
    var zeroList = arr.filter(function (num) { return num === 0; });
    return filtedList.concat(zeroList);
}
