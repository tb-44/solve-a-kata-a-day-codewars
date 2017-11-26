//Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole 
//duplicate number among an unsorted array/list of numbers starting from 1 up to n.

//Hints: a solution in linear time can be found; 
//using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.

//solution
var findDup = function (arr) {
    let i = 0;
    let result = [];
    let maximum = Math.max.apply(Math, arr);

    while (i < maximum) {
        result.push(0);
        i++;
    }

    i = 0;
    let duplicate;

    while (i < arr.length) {
        if (result[arr[i] - 1] === 0) {
            result[arr[i] - 1] = 1;
        } else {
            duplicate = arr[i];
            break;
        }
        i++;
    }
    return duplicate;
};

//others solutions
var findDup = function (arr) {
    var a = 0, found = {};
    while (!found[arr[a]]) found[arr[a++]] = true
    return arr[a]
}

var findDup = function (arr) {
    return arr.reduce(function (a, b) { return a + b; }) - arr.length * (arr.length - 1) / 2;
}