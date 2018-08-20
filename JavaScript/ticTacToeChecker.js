// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
    board = board.reduce((a, b) => {
        return a.concat(b);
    });
    let pattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    let win = pattern.filter(function (patterns) {
        return (board[patterns[0]] !== 0) && ((board[patterns[0]] === board[patterns[1]]) && (board[patterns[1]] === board[patterns[2]]));
    });
    if (win.length) {
        return board[win[0][0]];
    }
    if (board.some((e) => {
        return e === 0;
    })) {
        return -1;
    }
    return 0;
}