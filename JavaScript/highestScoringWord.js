// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    let allWords = x.split(" ");
    let m = 0;
    let highestScore = "";

    for (let i = 0; i < allWords.length; i++) {
        let score = allWords[i];
        let val = 0;

        for (let j = 0; j < score.length; j++) {
            val += (score.charCodeAt(j) - 96);
        }
        if (val > m) {
            m = val;
            highestScore = score;
        }
    }
    return highestScore;
}