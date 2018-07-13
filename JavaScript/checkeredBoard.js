// Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

// The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

// An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

// The input is expected to be a whole number that's at least two, and returns false otherwise (Nothing in Haskell).

// Examples:

// checkeredBoard(5)
// returns the string

// ■ □ ■ □ ■
// □ ■ □ ■ □
// ■ □ ■ □ ■
// □ ■ □ ■ □
// ■ □ ■ □ ■
// There should be no trailing white space at the end of each line, or new line characters at the end of the string.

// Note
// Do not use HTML entities for the squares (e.g. □ for white square) as the code doesn't consider it a valid square. A good way to check is if your solution prints a correct checker board on your local terminal.

function checkeredBoard(dimension) {
    if (parseInt(dimension) !== dimension || dimension < 2) {
        return false;
    }
    let board = [];
    for (let i = dimension; i > 0; i--) {
        let row = [];
        for (let j = 0; j < dimension; j++) {
            row.push((i + j) % 2 === 0 ? "□" : "■");
        }
        board.push(row.join(' '));
    }
    return board.join('\n');
}
