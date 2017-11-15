//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

//solution
function longest(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    var letter = s1.concat(s2);
    letter = letter.sort();

    var result = [];
    for (var i = 0; i < letter.length; i++) {
        if (result.indexOf(letter[i]) === -1) {
            result.push(letter[i]);
        }
    }
    result = result.join('');
    return result;
}

//other's solutions
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function (element, index, array) {
        return element !== array[index - 1];
    });
    return s4.join("");
}

function longest(s1, s2) {
    return (s1 + s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}