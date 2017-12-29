// Given a number n, return the number of odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!

//solution
function oddCount(n) {
    let arr = []
    let arr1 = Array.apply(null, { length: n }).map(Number.call, Number);
    for (let i = 1; i < n; i += 2) {
        arr.push(arr1[i])
    }
    return arr.length
}