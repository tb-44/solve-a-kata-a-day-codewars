// Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters.

//solution
function hasUniqueChars(str) {
    var check = str.split('').sort();
    for (var i = 0; i < check.length; i++) {
        if (check[i] == check[i + 1]) {
            return false;
        }
    }
    return true;
}

//other's solutions
function hasUniqueChars(str) {
    return str.split('').every(function (v, i, arr) {
        return arr.indexOf(v) == i;
    });
}

let hasUniqueChars = (str) => new Set(str).size === str.length;

function hasUniqueChars(str) {
    return !/(.).*\1/.test(str);
}