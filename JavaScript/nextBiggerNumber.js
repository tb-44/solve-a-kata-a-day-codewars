//You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//If no bigger number can be composed using those digits, return -1:

//solution
function nextBigger(n) {
    var bigger = (n) => n.toString().split('').sort((a, b) => b - a).join('');
    if (n.toString() === bigger(n))
        return -1;
    for (i = n + 1; i <= parseInt(bigger(n)); i++) {
        if (bigger(i) === bigger(n))
            return i;
    }
}

//other solutions
function nextBigger(n) {
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length - 1;
    while (i > 0) {
        if (chars[i] > chars[i - 1]) break;
        i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length - 1];
    for (i = 0; i < suf.length; ++i) {
        if (suf[i] > t) break;
    }
    chars[chars.length - 1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" + num);
    return num;
}

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n) {

    let arr = sortedDigits(n);
    let max = parseInt(arr.join(''), 10);

    for (var i = n + 1; i <= max; i++) {
        if (sortedDigits(i).every((x, j) => x === arr[j])) {
            return i;
        }
    }

    return -1;
}