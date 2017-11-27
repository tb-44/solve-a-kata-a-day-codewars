//Define a "prime prime" number to be a rational number written as one prime number over another prime number: primeA / primeB (e.g. 7/31)

//Given a whole number N, generate the number of "prime prime" rational numbers less than 1, using only prime numbers between 0 and N (non inclusive).

//Return the count of these "prime primes", and the integer part of their sum.

//solution
// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
function twoOldestAges(ages) {
    function sorting(a, b) {
        return a - b;
    }
    ages.sort(sorting);
    function older(array) {
        return array.filter(function (e, i, arr) {
            return !i || e != arr[i - 1];
        });
    }
    var oldAge = older(ages);
    var oldest = [];
    var len = oldAge.length;
    oldest.push(oldAge[len - 2]);
    oldest.push(oldAge[len - 1]);
    return oldest;
}

//others solutions
function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}