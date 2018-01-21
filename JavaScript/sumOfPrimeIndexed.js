// In this Kata, you will be trained on array indexing and basic prime number operations. Array indices are zero-based; this means that the first element of an array is at index 0.

// You will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// To make this interesting, array lengths in random tests will have up to 5000 elements.

// Good luck!

//solution
function total(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    let primeArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(i)) {
            primeArr.push(arr[i]);
        }
    }
    return primeArr.reduce(function (a, b) {
        return a + b
    })
}

function isPrime(val) {
    for (var i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return val > 1;
}

//others solution
function total(arr) {
    let prime = true, count = 0;

    arr.forEach(function (t, n) {
        if (n === 2) {
            count += arr[n];
        } else if (n >= 3) {
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    prime = false;
                    break;
                } else if ((n - 1 === i) && (prime = true)) {
                    count += arr[n];
                }
            }

        }
    });
    return count;
}

function total(arr) {

    let primeIndices = number => {
        if (number == 1) return false
        else {
            var divisors = 0
            var i = 1
            while (i <= number) {
                if (number % i == 0) divisors++
                i++
            }
        }
        if (divisors == 2) return true
        else return false
    }

    let searchedNumbers = arr.filter((_, idx) => (primeIndices(idx) ? true : false))
    let result = searchedNumbers.reduce((a, b) => a + b, 0)

    return result
}