// You and your best friend Stripes have just landed your first high school jobs! You'll be delivering newspapers to your neighbourhood on weekends. 
//For your services you'll be charging a set price depending on the quantity of the newspaper bundles.

// The cost of deliveries is:

// $3.85 for 40 newspapers
// $1.93 for 20
// $0.97 for 10
// $0.49 for 5
// $0.10 for 1
// Stripes is taking care of the footwork doing door-to-door drops and your job is to take care of the finances. 
//What you'll be doing is providing the cheapest possible quotes for your services.

// Write a function that's passed an integer representing the amount of newspapers and returns the cheapest price. 
//The returned number must be rounded to two decimal places.

//solution
function cheapestQuote(newspapers) {
    deliveryCost = {
        '3.85': 40,
        '1.93': 20,
        '0.97': 10,
        '0.49': 5,
        '0.10': 1
    };
    let sum = 0;
    for (var c in deliveryCost) {
        while (newspapers >= deliveryCost[c]) {
            sum += +c;
            newspapers -= deliveryCost[c];
        }
    }
    return +sum.toFixed(2);
}

//others solutions
const cheapestQuote = newspapers => {
    let total = 0;

    total += Math.floor(newspapers / 40) * 3.85;
    newspapers %= 40;

    total += Math.floor(newspapers / 20) * 1.93;
    newspapers %= 20;

    total += Math.floor(newspapers / 10) * 0.97;
    newspapers %= 10;

    total += Math.floor(newspapers / 5) * 0.49;
    newspapers %= 5;

    total += newspapers * 0.1;

    return Math.round(total * 100) / 100;
};

function cheapestQuote(n) {
    var num = [40, 20, 10, 5, 1], pr = [3.85, 1.93, 0.97, 0.49, 0.10], rs = 0;
    for (var i = 0; i < 5; n %= num[i], i++) rs += ~~(n / num[i]) * pr[i];
    return Math.round(rs * 100) / 100;
}