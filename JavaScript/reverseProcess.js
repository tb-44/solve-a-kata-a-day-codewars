// Suppose we know the process(A) by which a string s has been coded to a string r.

// The aim of the kata is to decode r to get back the original string s.

// Explanation of the known process(A):
// data: a string s composed of lowercase letters from a to z and a positive integer num
// we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 < -> a, 1 < -> b ...
// if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, then find ch the corresponding character of f(x)
// Accumulate all these ch in a string r.
// concatenate num and r and return the result.
//     Example:
// code("mer", 6015) -> "6015ekx"
// m < -> 12, 12 * 6015 % 26 == 4, 4 < -> e
// e < -> 4, 4 * 6015 % 26 == 10, 10 < -> k
// r < -> 17, 17 * 6015 % 26 == 23, 23 < -> x
// We get "ekx" hence "6015ekx"
// Task
// A string s has been coded to a string r by the above process(A).Write a function r -> decode(r) to get back s whenever it is possible.

// Indeed it can happen that the decoding is impossible when positive integer num has not been correctly chosen.In that case return "Impossible to decode".

//     Example:
// decode("6015ekx") -> "mer"
// decode("5057aan") -> "Impossible to decode"
// Note
// Please could you ask before translating: some translations are already written.

//solution

function decode(r) {
    var processStr = parseInt(r);
    var decode = r.match(/[a-z]/g).map(x => x.charCodeAt(0) - 97);
    var backStr = "";

    for (var d of decode) {
        var num = "";
        for (var i = 0; i < 26; i++) {
            if ((i * processStr) % 26 === d) {
                if (num !== "")
                    return "Impossible to decode";
                num = i;
                backStr += String.fromCharCode(97 + i);
            }
        }
    }
    return backStr;
}

//other
const startCharASCII = 97;
const letterCount = 26;

function decode(r) {
    var num = parseInt(r);
    var letters = [];
    var codes = [];
    for (var i = 0; i < letterCount; i++) {
        letters[i] = String.fromCharCode(startCharASCII + i);
        codes[i] = String.fromCharCode(i * num % letterCount + startCharASCII);
    }
    if (Array.from(new Set(codes)).length != letterCount) return 'Impossible to decode';
    return r.split(num)[1].split('').map((v, i, a) => letters[codes.indexOf(v)]).join('');
}