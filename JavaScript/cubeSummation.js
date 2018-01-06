// Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.

// If both numbers are the same, then the range is empty and the result should be 0.

// Examples:

// cubeSum(2,3); // => 3^3 = 27
// cubeSum(3,2); // => 3^3 = 27
// cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
// cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
// cubeSum(9, 9); // => 0

//solution
function cubeSum(n, m) {
    let sum = 0;
    if (n > m) {
        for (let i = m + 1; i <= n; i++) {
            sum += i * i * i;
        }
    }
    else {
        for (let j = n + 1; j <= m; j++) {
            sum += j * j * j;
        }
    }
    return sum;
}

//others
function cubeSum(n, m) {
    var min = Math.min(n, m) + 1,
        max = Math.max(n, m),
        sum = 0;
    while (min <= max) {
        sum += Math.pow(min++, 3);
    }
    return sum;
}

////

function cubeSum(n, m) {
    var v = 0, s = [n, m].sort(function (a, b) { return a - b; });
    while (s[1] > s[0]) v += Math.pow(s[1]--, 3);
    return v;
}