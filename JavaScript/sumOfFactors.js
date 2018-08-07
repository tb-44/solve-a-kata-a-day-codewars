// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.



function sumOfDivided(list) {
    const factorMap = {}
    for (const num of list) {
        for (const f of getPrimeFactors(num)) factorMap[f] = (factorMap[f] || 0) + num
    }

    return Object.keys(factorMap)
        .map(Number)
        .sort((a, b) => a - b)
        .map(i => [i, factorMap[i]])
}

function getPrimeFactors(value) {
    const result = []
    let num = Math.abs(value)

    for (let i = 2; i <= num; i++) {
        if (!isPrime(i))
            continue

        if (i === num) {
            result.push(i)
            break
        }

        if (num % i === 0) {
            result.push(i)
            do {
                num = num / i
            }
            while (num % i === 0)
        }
    }

    return result;
}

function isPrime(num) {
    if (num <= 1)
        return false
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0)
            return false
    return true
}

//other solutions
function sumOfDivided(lst) {
    var max = Math.max(...lst.map(x => Math.abs(x))),
        isPrime = x => {
            for (var i = 2; i * i <= x; i++) if (x % i === 0) return false;
            return true;
        };
    var sums = {};
    for (var i = 2; i <= max; i++) if (isPrime(i)) {
        lst.forEach(x => {
            if (x % i === 0) sums[i] = x + (sums[i] || 0);
        });
    }
    return Object.keys(sums).map(i => [+i, sums[i]]);
}