// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str) 
// take the str parameter being passed and determine if it is an acceptable s
// equence by either returning the string true or false. 
// The str parameter will be composed of + and = symbols with several letters between 
// them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded 
// by a + symbol. So the string to the left would be false. 
// The string will not be empty and will have at least one letter. 

//solution
function SimpleSymbols(str) {
    let regEx = /[a-z]/gi;
    let letters = str.match(regEx).length;
    let matches = 0;
    let splitter = str.split("");

    for (let i = 0; i < splitter.length; i++) {
        if (splitter[i].match(regEx) && splitter[i - 1] === '+' && splitter[i + 1] === '+') {
            matches++;
        }
    }
    return matches === letters;
}