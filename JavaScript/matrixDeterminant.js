// Write a function that accepts a square matrix (n x n 2D array) and returns the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the smallest cases: A 1x1 matrix |a| has determinant a. A 2x2 matrix [[a, b], [c, d]] or

// |a b|
// |c d|

// has determinant ad - bc.

// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n n-1 x n-1 matrices. For the 3x3 case, [[a, b, c], [d, e, f], [g, h, i]] or

// |a b c|
// |d e f|
// |g h i|

// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs, or

// |e f|
// |h i|

// Note the alternation of signs.

// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

//solution
function determinant(m) {
    if (m.length == 1) {
        return m[0][0];
    }
    return m[0].reduce(function (acc, x, col) {
        return acc + (col & 1 ? -1 : 1) * x * determinant(minor(m, { i: 0, j: col }));
    }, 0);
}

function minor(m, idxs) {
    function removeElement(index, m) {
        return m.slice(0, index).concat(m.slice(index + 1));
    }
    return removeElement(idxs.i, m.map(removeElement.bind(null, idxs.j)));
}

//other solutions
function determinant(m) {
    // 1 x 1 ===> return value
    if ((m.length === 1) && (m[0].length === 1)) {
        return m[0][0];
    }

    // 2 x 2
    if ((m.length === 2) && (m[0].length === 2)) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }

    // n x n
    return m[0].reduce(function (a, b, i) {
        b = (i % 2 === 1) ? -b : b;
        return a + b * (determinant(minor(m, i)));
    }, 0);
};

// returns a new matrix with the 1st row and i-th column removed
function minor(m, index) {
    var arr = [];
    for (var i = 1; i < m.length; i++) {
        var inner = [];
        for (var j = 0; j < m[i].length; j++) {
            // skip the value at the given index
            if (j !== index) {
                inner.push(m[i][j]);
            }
        }
        arr.push(inner);
    }
    return arr;
}

function determinant(m) {
    // use LU decomposition for O(N^3) solution
    var lu = decompose(m),
        d = diagonalProduct(lu.l) * diagonalProduct(lu.u) * (lu.numOfSwaps % 2 === 0 ? 1 : -1);
    // the LU decomposition process isn't precise enough, so...
    return Math.round(d); // assume integer matrix (so must have integer determinant)
};

// Decompose matrix into lower and upper triangular 2D arrays.
function decompose(m) {
    // assume non-empty square matrix

    var size = m.length,
        l = createIdentity(size),
        u = copy(m),
        p = createIdentity(size),
        numOfSwaps = 0,
        pivotRowIndex,
        maxFirstElement,
        i, j, k, r, e;

    // Gaussian elimination w / partial pivoting
    for (i = 0; i < size - 1; i++) { // reduce size of square subset each iteration
        // choose pivot
        pivotRowIndex = i;
        maxFirstElement = u[i][i];
        for (r = i; r < size - 1; r++) { // for rows in sub-square
            if (u[r][i] > maxFirstElement) {
                maxFirstElement = u[r][i];
                pivotRowIndex = r;
            }
        }
        if (maxFirstElement === 0) {
            // singular matrix - assume it'll never happen
            throw "SingularMatrixException";
        }

        // row swap
        if (pivotRowIndex !== i) {
            numOfSwaps++;
            for (e = i; e < size; e++) { // swap rows in u
                swapEntryBetweenRows(u, i, pivotRowIndex, e); // this should be clearer
            }
            for (e = 0; e < i; e++) { // swap rows in l
                swapEntryBetweenRows(l, i, pivotRowIndex, e); // this should be clearer
            }
            swapRow(p, i, pivotRowIndex);
        }

        // Gaussian Elimination
        for (j = i + 1; j < size; j++) { // for every row in this sub-square
            l[j][i] = u[j][i] / u[i][i] // work out the factor to make first element zero
            for (k = i; k < size; k++) { // for each element in row in sub-square
                u[j][k] -= l[j][i] * u[i][k] // row = row - factor*topRowInSubset
            }
        }
    }
    return { l: l, u: u, p: p, numOfSwaps: numOfSwaps };
}

function createIdentity(size) {
    // assume size > 0
    var m = new Array(size);
    for (var i = 0; i < size; i++) {
        m[i] = new Array(size);
        for (var j = 0; j < size; j++) {
            m[i][j] = i === j ? 1 : 0;
        }
    }
    return m;
}

function copy(m) {
    var c = new Array(m.length);
    for (var i = 0; i < m.length; i++) {
        c[i] = new Array(m[i].length);
        for (var j = 0; j < m[i].length; j++) {
            c[i][j] = m[i][j];
        }
    }
    return c;
}

function diagonalProduct(triangularMatrix) {
    var size = triangularMatrix.length,
        r = 1;
    for (var i = 0; i < triangularMatrix.length; i++) {
        r *= triangularMatrix[i][i];
    }
    return r;
}

function swapEntryBetweenRows(m, row1, row2, i) {
    var temp = m[row1][i];
    m[row1][i] = m[row2][i];
    m[row2][i] = temp;
}

function swapRow(m, x, y) {
    var temp = m[x];
    m[x] = m[y];
    m[y] = temp;
}