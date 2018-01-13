// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
//Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the 
//tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. 
//Otherwise return NO.

// ###Examples:

// // === JavaScript ==

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100])    
//         // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(peopleInLine) {

    let change = {
        "25": 0,
        "50": 0,
        "100": 0
    };

    for (let i = 0; i < peopleInLine.length; i++) {
        let payment = peopleInLine[i];

        switch (payment) {
            case 25:
                change["25"] += 1;
                break;
            case 50:
                if (change["25"] <= 0) {
                    return "NO";
                }
                change["25"] -= 1;
                change["50"] += 1;
                break;
            case 100:
                change["50"] >= 1 ? change["50"] -= 1 : change["25"] -= 2;
                change["25"] -= 1;
                if (change["25"] < 0 || change["50"] < 0) {
                    return "NO";
                }
                break;
        }
    }
    return "YES";
}

//other
function tickets(peopleInLine) {
    var m25 = 0, m50 = 0;

    for (var i = 0; i < peopleInLine.length; i++) {
        switch (peopleInLine[i]) {
            case 25:
                m25++;
                break;
            case 50:
                m25 > 0 ? m25-- : m25 = -1;
                m50++;
                break;
            case 100:
                m25 > 0 && m50 > 0 ? m50-- : (m25 > 2 ? m25 -= 2 : m25 = -1);
                m25--;
                break;
        }
    }
    return m25 < 0 ? "NO" : "YES";
}