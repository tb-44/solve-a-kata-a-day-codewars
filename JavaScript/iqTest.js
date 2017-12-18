// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
//Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

//solution
function iqTest(numbers) {
    var arr = numbers.split(' ').map(Number);
    if (arr[0] % 2 !== arr[1] % 2 && arr[0] % 2 !== arr[2] % 2) {
        return 1;
    }
    else {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] % 2 !== arr[0] % 2) {
                return (i + 1);
            }
        }
    }
};

//others 
function iqTest(numbers) {
    numbers = numbers.split(" ").map(function (el) { return parseInt(el) });

    var odd = numbers.filter(function (el) { return el % 2 === 1 });
    var even = numbers.filter(function (el) { return el % 2 === 0 });

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

function iqTest(numbers) {
    numbers = numbers.split(' ')

    var evens = []
    var odds = []

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] & 1) {
            odds.push(i + 1)
        } else {
            evens.push(i + 1)
        }
    }

    return evens.length === 1 ? evens[0] : odds[0]
}