// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

//solution
function sumStrings(a, b) {
    a = a.replace(/^0+/, '').split('').reverse()
    b = b.replace(/^0+/, '').split('').reverse()
    var result = [];
    var r = 0

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const x = Number(a[i] || 0)
        const y = Number(b[i] || 0)
        x + y + r < 10 ? (result.push(x + y + r), r = 0) : (result.push((x + y + r) - 10), r = 1)
    }

    r == 1 ? result.push(r) : undefined
    return result.reverse().map(x => String(x)).join('')
}

//others
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

function sumStrings(a, b) {
    a = a.reverse(); b = b.reverse();
    var carry = 0;
    var index = 0;
    var sumDigits = [];
    while (index < a.length || index < b.length || carry != 0) {
        var aDigit = index < a.length ? parseInt(a[index]) : 0;
        var bDigit = index < b.length ? parseInt(b[index]) : 0;
        var digitSum = aDigit + bDigit + carry;
        sumDigits.push((digitSum % 10).toString());
        carry = Math.floor(digitSum / 10);
        index++;
    }
    sumDigits.reverse();
    while (sumDigits[0] == '0') sumDigits.shift();
    return sumDigits.join('');
}

function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c > 9;
    }
    return res.replace(/^0+/, '');
}