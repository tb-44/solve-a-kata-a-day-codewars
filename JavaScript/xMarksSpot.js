// Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. 
// The X will be represented by 1's and the rest will be 0's. 
// E.g.

// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];

// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];

//solution
function x(n) {
    let i = 0, answer = [];
    while (i < n) {
        let j = 0, a = [];
        while (j < n) {
            a[j] = 0;
            j++;
        }
        answer.push(a);
        i++;
    }

    i = 0;
    while (i < n) {
        var k = 0;
        while (k < n) {
            if (i === k) {
                answer[i][k] = 1;
            }
            if (i + k === n - 1) {
                answer[i][k] = 1;
            }
            k++;
        }
        i++;
    }
    return answer;
}

//others
function x(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push([]);
        for (var j = 0; j < n; j++) {
            array[i].push(i === j || i + j === n - 1 ? 1 : 0);
        }
    }
    return array;
}

const x = n => {
    return [...Array(n)].map((v, i) => {
        return [...Array(n)].map((v, j) => +(i == j || !(n - (i + j + 1))));
    });
}