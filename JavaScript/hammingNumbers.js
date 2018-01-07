// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in example test fixture.

// Your code should be able to compute all of the smallest 5,000 (Clojure: 2000) Hamming numbers without timing out.

//solution
function hamming(n) {
    let ham = [], a, b, c;
    ham[0] = 1, a = b = c = 0;

    for (let i = 1; i < n; i++) {
        ham[i] = Math.min(ham[a] * 2, ham[b] * 3, ham[c] * 5);
        if (ham[i] === ham[a] * 2) a++;
        if (ham[i] === ham[b] * 3) b++;
        if (ham[i] === ham[c] * 5) c++;
    }

    return ham[n - 1];
}

//other
function hamming(n) {
    var seq = [1];
    var i2 = 0, i3 = 0, i5 = 0;
    for (var i = 1; i < n; i++) {
        var x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
        seq.push(x);
        if (2 * seq[i2] <= x) i2++;
        if (3 * seq[i3] <= x) i3++;
        if (5 * seq[i5] <= x) i5++;
    }
    return seq[n - 1];
}

var hamming = (function (mem) {
    return function (n) {
        return (function rec(n) {
            var set, result;
            if (n === 1) return [1, [2, 3, 5]];
            else if (mem[n]) return mem[n];
            set = rec(n - 1)[1];
            mem[n] = [set[0], [2 * set[0], 3 * set[0], 5 * set[0]].filter(function (n) {
                return set.indexOf(n) === -1;
            }).concat(set.slice(1)).sort(function (a, b) { return a - b; })];
            return mem[n];
        })(n)[0];
    };
})([]);