//You might know some pretty large perfect squares. But what about the NEXT one?

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

//If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

//solution

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        var result = sq + 1;
        while (true) {
            if (Number.isInteger(Math.sqrt(result))) {
                return result;
            }
            result++;
        }
    }
    return -1;
}

//other's solutions
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    if (Math.round(number) === number) {
        return Math.pow(++number, 2)
    }
    return -1;
}

function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}