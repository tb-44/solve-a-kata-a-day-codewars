//Task
//Write a function that accepts msg string and returns local tops of string from the highest to the lowest.

//solution
function tops(msg) {
    var count = 1;
    var arr = [];
    for (var i = 0 + count; i < msg.length; i += count) {
        if (count % 2 !== 0) {
            arr.unshift(msg[i]);
        }
        count++;
    }
    return arr.join('');
}

//others solutions
function tops(msg) {
    let [res, i, j] = ['', 0, 0];

    while (msg[j += i++ * 4 + 1])
        res = msg[j] + res;

    return res;
}

function tops(msg) {
    if (!msg) return '';
    const K = 4;
    let incr = 5;
    let tops = '';
    for (let i = 1; i < msg.length; i = i + incr) {
        tops += msg[i];
        if (i != 1) {
            incr = incr + K;
        }
    }
    return tops.split('').reverse().join('');
}