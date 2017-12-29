// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
//It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 
//squares disposed in the same manner as in the drawing:

// #Hint: See Fibonacci sequence

// #Ref: http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares 
//(they are numbered from 0 to n) and returns the total perimeter of all the squares.

//solution
function perimeter(n) {
    let one = 1, two = 1;
    let three = one + two;
    let per = 16;
    this.fib = function () {
        for (let i = 3; i <= n; i++) {
            one = two; two = three;
            three = one + two;
            per += three * 4;
        }
        return per;
    }
    return fib();
}

//others
function perimeter(n) {
    let arr = [1, 1];
    for (let i = 0; i < n - 1; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    return 4 * arr.reduce((sum, num) => sum + num, 0);
}

function perimeter(n) {
    var fib = [0, 1];
    for (var i = 0; i < n; i++) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.reduce((a, b) => a + b) * 4;
}