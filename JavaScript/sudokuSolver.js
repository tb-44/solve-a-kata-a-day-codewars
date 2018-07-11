// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]]

function sudoku(puzzle) {
    let check = 0;

    function sudo(puzzle, ix) {
        if (ix > 80) {
            check = 1;
            return;
        }

        let i = Math.floor(ix / 9);
        let j = ix % 9;
        
        if (puzzle[i][j] !== 0)
            return sudo(puzzle, ix + 1);

        for (let a = 1; a <= 9; a++) {
            if (isvalid(i, j, puzzle, a)) {
                puzzle[i][j] = a;
                sudo(puzzle, ix + 1);
            }
        }
        if (check === 0)
            puzzle[i][j] = 0;
    }
    sudo(puzzle, 0)
    return puzzle
}

function isvalid(i, j, puzzle, num) {
    for (let k = 0; k < puzzle[i].length; k++) {
        if (puzzle[i][k] == num)
            return false;
    }

    for (let k = 0; k < puzzle.length; k++) {
        if (puzzle[k][j] == num)
            return false;
    }

    let ii = Math.floor(i / 3), jj = Math.floor(j / 3);
    for (let k = 3 * ii; k < 3 * ii + 3; k++) {
        for (let l = 3 * jj; l < 3 * jj + 3; l++) {
            if (puzzle[k][l] == num)
                return false;
        }
    }
    return true;
};