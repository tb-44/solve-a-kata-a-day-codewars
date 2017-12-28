// Your task is to write a higher order function for chaining together a list of unary functions. 
//In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as

// d(c(b(a(input))))

//solution
function chained(functions) {
    return function (input) {
        functions.forEach(function (e) {
            input = e(input);
        });
        return input;
    };
}

//others solutions
function chained(functions) {
    return function (input) {
        return functions.reduce(function (input, fn) { return fn(input) }, input);
    }
}

function chained(functions) {
    return input => functions.reduce((res, func) => func(res), input);
}