// Define a function that takes one integer argument and returns true or false depending on if the integer is a prime.

// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution which does not loop all the way up to n.
// Per wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 1)
        return false;

    if (num <= 3)
        return true;

    if (num % 2 == 0 || num % 3 == 0)
        return false;

    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i == 0 || num % (i + 2) == 0)
            return false;
    }
    return true;
}