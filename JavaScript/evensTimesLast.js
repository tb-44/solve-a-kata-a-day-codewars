//Given an array of integers, return the sum of all the integers that have an even index, 
//multiplied by the integer at the last index.

//If the array is empty, you should return 0.

//solution
function evenLast(numbers) {
    if (numbers === undefined || numbers === 0) {
        return 0
    }
    var last = numbers[numbers.length - 1]
    var filtered = numbers.filter(function (e, i, arr) {
        return (i % 2 === 0)
    })
    var sum = filtered.reduce(function (a, b) {
        return a + b;
    })
    return sum * last
}
