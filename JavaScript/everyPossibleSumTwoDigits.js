// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

function digits(num) {
    let sum = [];
    num = num.toString();
    for (let i = 0; i < num.length; i++)
        for (let j = i + 1; j < num.length; j++)
            sum.push(+(num[i]) + +(num[j]));
    return sum;
}

//others
const digits = n => n
    .toString()
    .split``
    .reduce((r, e, i, a) => r.concat(a.slice(++i).reduce((r, x) => r.concat(+e + +x), [])), []);

    
function digits(num) {
    var digitsArray = num.toString().split("");
    digitsArray = digitsArray.map(x => parseInt(x));
    var sumsArray = [];

    digitsArray.map(function (x, index, array) {
        for (var i = index; i < array.length - 1; i++) {
            sumsArray.push(x + array[i + 1]);
        }
    });

    return sumsArray;
}