// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//solution
function defineSuit(card) {
    var card1 = card.split('')
    for (let i = 0; i < card1.length; i++) {
        if (card1[i] === '♣') {
            return 'clubs'
        } else if (card1[i] === '♠') {
            return 'spades';
        } else if (card1[i] === '♦') {
            return 'diamonds';
        } else if (card1[i] === '♥') {
            return 'hearts'
        }
    }
}

//other's solutions
function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}

function defineSuit(card) {
    if (card.includes('♥')) return 'hearts'
    if (card.includes('♦')) return 'diamonds'
    if (card.includes('♣')) return 'clubs'
    if (card.includes('♠')) return 'spades'
}

const defineSuit = card => {
    const char = card.charAt(card.length - 1);
    switch (char) {
        case '♣': return 'clubs';
        case '♠': return 'spades';
        case '♦': return 'diamonds';
        default: return 'hearts';
    }
}
