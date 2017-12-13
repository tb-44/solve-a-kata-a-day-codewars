//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.

//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//Example
//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

//solution
function sortArray(array) {
    let odd = array.filter(ifOdd).sort(ascend);
    return array.map(repOdd);

    function ascend(a, b) {
        return a > b;
    }

    function ifOdd(n) {
        return n % 2;
    }

    function repOdd(num) {
        return ifOdd(num) ? odd.shift() : num;
    }
}

