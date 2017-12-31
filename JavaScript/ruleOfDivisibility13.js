// When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

// 1, 10, 9, 12, 3, 4.

// Then the whole pattern repeats.

// Hence the following method: Multiply the right most digit of the number with the left most number in the sequence shown above, the second right most digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

// ...........................................................................

// Example: What is the remainder when 1234567 is divided by 13?

// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

// We repeat the process with 178:

// 8x1 + 7x10 + 1x9 = 87

// and again with 87:

// 7x1 + 8x10 = 87

// ...........................................................................

// From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9

// Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.

// thirt(1234567) calculates 178, then 87, then 87 and returns 87.

// thirt(321) calculates 48, 48 and returns 48

//solutions
const thirt = n => {
    let numbers = [1, 10, 9, 12, 3, 4]
    let string = n.toString()
    let index = 0
    let product = []
    let current = n
    for (let i = string.length - 1; i >= 0; i--) {
        product.push((string[i] * 1) * numbers[index])
        if (index === 5) index = 0
        else index += 1
    }
    let checker = product.reduce((a, b) => a + b)
    if (checker === current) return current
    else {
        current = checker
        return thirt(current)
    }
}

//other
const getNum = n => [1, 10, 9, 12, 3, 4][n % 6];

const thirt = n => {
    let result = [...`${n}`].reverse().reduce((s, v, i) => s + v * getNum(i), 0);
    return result === n ? result : thirt(result);
}

function thirt(n) {
    var w = [1, 10, 9, 12, 3, 4];
    while (true) {
        var r = n, q = -1, c = 0, j = 0;
        while (q !== 0) {
            q = Math.floor(r / 10);
            c += (r % 10) * w[j % 6];
            r = q;
            j++;
        }
        if (c === n)
            return c;
        n = c;
    }
}
