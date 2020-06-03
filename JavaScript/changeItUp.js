// Create a function that takes a string as a parameter and does the following, in this order:

// replaces every letter with the letter following it in the alphabet(see note below)
// makes any vowels capital
// makes any consonants lower case
// Note: the alphabet should wrap around, so Z becomes A

// So, for example the string "Cat30" would return "dbU30"(Cat30-- > Dbu30-- > dbU30)

function changer(str) {
  return str
    .toLowerCase()
    .replace(/[a-z]/g, (x) =>
      x === "z" ? "a" : String.fromCharCode(s.charCodeAt(0) + 1)
    )
    .replace(/[auioe]/g, (y) => y.toUpperCase());
}
