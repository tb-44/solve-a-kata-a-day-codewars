// It is 2050 and romance has long gone, relationships exist solely for practicality.

// MatchMyHusband is a website that matches busy working women with perfect house husbands. You have been employed by MatchMyHusband to write a function that determines who matches!!

// The rules are... a match occurs providing the husband's "usefulness" rating is greater than or equal to the woman's "needs".

// The husband's "usefulness" is the SUM of his cooking, cleaning and childcare abilities and takes the form of an array .

// usefulness example --> [15, 26, 19]   (15 + 26 + 19) = 60

// Every woman that signs up, begins with a "needs" rating of 100. However, it's realised that the longer women wait for their husbands, the more disatisfied they become with our service. They also become less picky, 
//therefore their needs are subject to exponential decay of 15% per month. https://en.wikipedia.org/wiki/Exponential_decay

//solution
function match(usefulness, months) {
    let sumMatch = usefulness.reduce(function (a, b) {
        return a + b;
    }, 0);
    let useful = 100 * Math.pow(Math.E, -0.15 * months);
    if (sumMatch >= Math.round(useful, 3)) {
        return 'Match!';
    } else {
        return 'No match!';
    }
}

//others
function match(usefulness, months) {
    let total = usefulness.reduce((acc, ele) => acc + ele)
    let needsRating = 100 * (Math.pow(1 - 0.15, months))
    return total >= needsRating ? "Match!" : "No match!"
}

function match(usefullness, months) {
    var us = usefullness.reduce((acc, val) => acc + val, 0);
    var cur = 100;
    for (var i = 0; i < months; ++i) cur *= 0.85;
    return cur > us ? 'No match!' : 'Match!';
}