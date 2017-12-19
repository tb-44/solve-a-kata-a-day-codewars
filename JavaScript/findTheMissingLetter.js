// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

//solution
const findMissingLetter = array => {
    let charCodes = array.map(e => e.charCodeAt(0))
    for (let i = 0; i < charCodes.length - 1; i++)
        if (charCodes[i] !== charCodes[i + 1] - 1)
            return String.fromCharCode(charCodes[i] + 1)
}

//others
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt(0)) {
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")
}

function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
            return String.fromCharCode(letters[i].charCodeAt() + 1);
        }
    }
}

