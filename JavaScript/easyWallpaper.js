// John wants to decorate a room with wallpaper. He has been said that making sure he has the right amount of wallpaper is more complex than it sounds. He wants a fool-proof method to getting it right.

// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

// Last time he did these calculations he caught a headache so could you help John? Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

// #Example: wallpaper(4, 3.5, 3) should return "ten"

// #Notes:

// all rolls (even with incomplete width) are put edge to edge
// 0 <= l, w, h (floating numbers), it can happens that w x h x l is zero
// the integer r (number of rolls) will always be less or equal to 20

//solution
function wallpaper(l, w, h) {
    let strNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let calc = strNum[Math.ceil(2 * h * (l + w) / 0.52 / 10 * 1.15)];
    if (calc === 0) {
        return 'zero'
    } else {
        return calc;
    }
}

//others
function toWord(n) {
    var words = ["zero", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    return words[n];
}

function wallpaper(l, w, h) {
    if ([l, w, h].indexOf(0) >= 0) {
        return "zero";
    } else {
        var roll = 5.2;
        var buffer = 1.15;;
        var need = (l * h) * 2 + (w * h) * 2;
        return toWord(Math.ceil(need / roll * buffer));
    }
}

var vals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

function wallpaper(l, w, h) {
    if (l == 0 || w == 0 || h == 0) {
        return 'zero';
    } else {
        console.log(l, w, h);
        var lWalls = 2 * l * 1.15;
        var wWalls = 2 * w * 1.15;
        console.log('wwall', wWalls);
        var numRollH = h / (52 / 100);
        var numRollW = wWalls / 10;
        var numRollL = lWalls / 10;

        var rollNum = Math.ceil((numRollL + numRollW) * numRollH);

        return vals[rollNum];
    }
}