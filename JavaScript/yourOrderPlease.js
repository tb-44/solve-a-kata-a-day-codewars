// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

// your_order("is2 Thi1s T4est 3a")
// [1] "Thi1s is2 3a T4est"

//solution
function order(words) {
    return words.split(' ').sort(function (a, b) {
        return parseFloat(a.replace(/\D/g, '')) - parseFloat(b.replace(/\D/g, ''));
    }).join(' ');
}

//others
var reg = /\d/;

function order(words) {
    return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
    return +word.match(reg) - +nextWord.match(reg)
}

////

function order(words) {
    var array = words.split(' ');
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}