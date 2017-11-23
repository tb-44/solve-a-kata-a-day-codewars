//My friend John likes to go to the cinema. He can choose between system A and system B.
//John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.
//The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

//solution
function movie(card, ticket, perc) {
    var cinema = 1;
    var ticketPrice;
    var t = ticket;
    var total = 0;

    while (true) {
        ticketPrice = ticket * cinema;
        t *= perc;
        total += t;
        if (ticketPrice > Math.ceil(total + card)) {
            break;
        }
        cinema++;
    }

    return cinema;
} 