// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]
// Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

// For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

// Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

// Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.

function checkWord(board, word) {

    const rows = board.length;
    const cols = board[0].length;

    let q = board.reduce((ps, row, i) => {
        row.forEach((x, y) => {
            if (x === word[0]) {
                acc.push({
                    pos: { r: i, c: y },
                    next: 1,
                    path: [cols * i + y]
                });
            }
        });
        return ps;
    }, []);

    let words = (obj, q) => {

        let moves = [
            { r: obj.pos.r - 1, c: obj.pos.c },
            { r: obj.pos.r + 1, c: obj.pos.c },
            { r: obj.pos.r, c: obj.pos.c - 1 },
            { r: obj.pos.r, c: obj.pos.c + 1 },
            { r: obj.pos.r - 1, c: obj.pos.c - 1 },
            { r: obj.pos.r - 1, c: obj.pos.c + 1 },
            { r: obj.pos.r + 1, c: obj.pos.c - 1 },
            { r: obj.pos.r + 1, c: obj.pos.c + 1 }
        ];

        moves.forEach((o) => {
            let index = cols * o.r + o.c;
            if (o.r >= 0 && o.r < rows && o.c >= 0 && o.c < cols) {
                if (board[o.r][o.c] === word[obj.next] && !obj.path.includes(index)) {
                    let clone = JSON.parse(JSON.stringify(obj));
                    clone.pos = { r: o.r, c: o.c };
                    clone.next += 1;
                    clone.path.push(index);
                    q.push(clone);
                }
            }
        });
    };

    while (q.length > 0) {
        let obj = q.shift();
        if (obj.next === word.length) {
            return true;
        }
        words(obj, q);
    }
    return false;
}