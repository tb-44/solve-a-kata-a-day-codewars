// Consider an array that has no prime numbers, and none of its elements has any prime digit. 
//It would start with: [1,4,6,8,9,10,14,16,18,..]. The element at index 1 is 4.

// You will be given an integer n and your task will be return the number at that index in the array. 
//For example, solve(1) = 4, as explained above.

//solutions
function isPrime(n) {
    if (n === 2) { return true; }
    if (n < 2 || n % 2 === 0) { return false; }
    for (let i = 3; i <= ~~Math.sqrt(n); i += 2) {
        if (n % i === 0) { return false; }
    }
    return true;
}

function solve(n) {
    let arr = [];
    for (let i = 1; arr.length <= n; i++)
        if (!isPrime(i) && !/[2357]/.test("" + i)) { arr.push(i) }
    return arr.pop();
};

/////////

const primes = new Set([2, 3, 5, 7, 11, 13])
const check = x => [...String(x)].map(Number).every(n => !primes.has(n))
const cache = [1, 4, 6, 8, 9, 10, 14, 16, 18]
const isPrime = x => {
    for (let i = 2; i <= Math.sqrt(x); i++)
        if (x % i == 0)
            return false
    return true
}

function solve(n) {
    let x = cache[cache.length - 1] + 1
    while (cache.length <= n) {
        if (check(x)) {
            isPrime(x) ? primes.add(x) : cache.push(x)
        }
        x++
    }
    return cache[n]
};

//others solutions
function isPrime(n) {
    if (n <= 0) return false
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n !== 1
}
function noPrimeDigits(n) {
    ns = n.toString();
    for (var i = 0; i < ns.length; i++) {
        if (isPrime(Number(ns[i]))) {
            return false
        } else {
            continue;
        }
    }
    return true;
}
function noprimesInRange(start, end) {
    var primesToN = [];
    for (let i = start + 1; i <= end; i++) if (!isPrime(i) && noPrimeDigits(i)) primesToN.push(i);
    return primesToN;
}
function solve(n) {
    var start = 0;
    var end = 5000;
    var arr = noprimesInRange(start, end);
    var len = arr.length;
    var oldlen = 0;
    while (len < n) {
        start = end;
        end += 5000;
        arr = noprimesInRange(start, end);
        oldlen = len;
        len += arr.length;
    }
    return arr[n - oldlen];
}

function primeCheck(n) {
    if (n == 1) {
        return false;
    }
    var prime = true;
    for (var i = 2; i <= Math.pow(n, 0.5); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        return true;
    }
    n = n.toString();
    for (var i in n) {
        char = n.charAt(i);
        if (["2", "3", "5", "7"].includes(char)) {
            return true;
        }
    }
    return false;
}

function solve(n) {
    var i = 0;
    var num = -1;
    while (true) {
        i++;
        if (!primeCheck(i)) {
            num++
        }
        if (num == n) {
            return i;
        }
    }
};