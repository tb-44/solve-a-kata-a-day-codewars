// Codebyte Challenge
// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space. 

//solution:

function LetterCapitalize(str) {
    let splitter = str.split(" ");
    let result = "";

    for (let i = 0; i < splitter.length; i++) {
        let uppercase = splitter[i].charAt(0).toUpperCase();
        let lowercase = splitter[i].substr(1);
        result = result.concat(uppercase).concat(lowercase);

        if (i < splitter.length - 1) {
            result = result.concat(" ");
        }
    }
    return result;
}