// Write a function isIntArray with the below signature.

// function isIntArray(arr) {
//     return true;
// }
// returns true if every element in an array is an integer. 
// returns true if array is empty.
// returns false for every other input.

//solution
function isIntArray(arr) {
    if (!arr)
        return false;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !(arr[i]) || arr[i] % 1 !== 0)
            return false;
    }
    return true;
}

//others
let isIntArray = arr => !!arr && arr.every(Number.isInteger);

Number.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
};

function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(Number.isInteger)
}

function isIntArray(arr) {
    if (arr == null) { return false; }
    if (typeof arr.length == 'undefined') { return false; }
    if (!(arr instanceof Array)) { return false; }
    for (index in arr) {
        if (!(typeof arr[index] === 'number' && (arr[index] % 1) === 0)) {
            return false;
        }
    }
    return true;
}