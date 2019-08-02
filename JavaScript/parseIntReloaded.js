// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

// Examples:

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:

// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

function parseInt(string) {
    var words = {
        zero: 0, ten: 10,
        one: 1, eleven: 11,
        two: 2, twelve: 12, twenty: 20,
        three: 3, thirteen: 13, thirty: 30,
        four: 4, fourteen: 14, forty: 40,
        five: 5, fifteen: 15, fifty: 50,
        six: 6, sixteen: 16, sixty: 60,
        seven: 7, seventeen: 17, seventy: 70,
        eight: 8, eighteen: 18, eighty: 80,
        nine: 9, nineteen: 19, ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000
    };

    var partial = string.split(/[- ]/).filter(function (e) {
        return e != 'and';
    }).map(function (e) {
        return words[e];
    });

    let num = 0;
    let previous = 0;

    for (let i = 0, n = partial.length - 1; i <= n; i++) {
        let current = partial[i];
        if (previous == 0) {
            previous = current;
        } else if (previous > current) {
            previous += current;
        } else {
            previous *= current;
        }

        if (current >= 1000 || i == n) {
            num += previous;
            previous = 0;
        }
    }
    return num;
}