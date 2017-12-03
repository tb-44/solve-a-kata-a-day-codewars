//Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

//Examples:
//13 17 31 37 71 73 are Backwards Read Primes
//13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

//Task
//Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one being greater than the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.
//Example
//backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

function backwardsPrime(start, stop) {
    var result = [];
    while (start <= stop) {
        if (start > 10) {
            if (start.toString() !== start.toString().split("").reverse().join("")) {
                if (isPrime(start) && isPrime(parseInt(start.toString().split("").reverse().join("")))) {
                    result.push(start);
                }
            }
        }
        start++;
    }
    return result;
}

function isPrime(n) {
    if (n === 2 || n === 3)
        return true;
    else if (n % 2 === 0 || n % 3 === 0)
        return false;
    else {
        var i = 5;
        while (i <= n / 2) {
            if (n % i === 0) {
                return false;
            }
            i++;
        }
    }
    return true;
}

//others solutions
function backwardsPrime(start, stop) {
    var range = [];
    for (var i = start % 2 == 0 ? start + 1 : start; i <= stop; i += 2) range.push(i);
    return range.filter(function (v) { return isPrime(v); }).filter(function (v) {
        var rev = parseInt(v.toString().split('').reverse().join(''));
        return rev != v && validPrimeCheck(rev);
    });
}

//Uses an ever-expanding Sieve of Eratosthenes to test for primes
var sieve = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function validPrimeCheck(num) {
    generateSieve(Math.ceil(Math.sqrt(num)));
    return isPrimeFromSieve(num);
}

function generateSieve(max) {
    var current = sieve[sieve.length - 1] + 2;
    while (current <= max) {
        if (isPrimeFromSieve(current)) sieve.push(current);
        current += 2;
    }
}

function isPrimeFromSieve(num) {
    var max = Math.ceil(Math.sqrt(num));
    for (var i = 0; i < sieve.length; i++) {
        if (num % sieve[i] === 0) return false;
        else if (max < sieve[i]) return true;
    }
    return true;
}

function isPrime(num) {
    if (num < 2 || (num % 2 == 0 && num !== 2)) return false;
    else {
        if (sieve.indexOf(num) !== -1) return true;
        else return validPrimeCheck(num);
    }
}

function backwardsPrime(start, stop) {
    var primes = [];
    var backwardsPrimes = [];

    function isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function reverse(str) {
        return Number(str.toString().split('').reverse().join(''));
    }

    for (var i = start; i <= stop; i++) {
        if (isPrime(i)) primes.push(i);
    }

    for (var i = 0; i < primes.length; i++) {
        if (primes[i] < 10) continue;

        if (reverse(primes[i]) !== primes[i] && isPrime(reverse(primes[i]))) {
            backwardsPrimes.push(primes[i]);
        }
    }

    return backwardsPrimes;
}