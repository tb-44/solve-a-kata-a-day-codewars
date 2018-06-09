// CoderByte Challenge
// Using the JavaScript language, have the function LongestWord(sen) 
// take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, 
// return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {
    let senMatch = sen.match(/[a-z0-9]+/gi);
    let senSorted = senMatch.sort(function (x, y) {
        return y.length - x.length;
    });
    return senSorted[0];
}