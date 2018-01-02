// Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

// The triangle should be returned as a nested array.

// Note: For JavaScript version, your final result is a string representation of the array. Sorry for the inconvenience, test cases are locked so this is the best I could do.

// - V

// for example:

// pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

//           [1]
//         [1   1]
//        [1  2  1]
//       [1  3  3  1]
// here you get the 3 by adding the 2 and 1 above it.

//solution

function pascal(depth) {
    let arr = [];
    let arr2 = [];
    for (var i = 0; i < depth; i++) {
        arr2 = [];
        for (var j = 0; j <= i; j++) {
            switch (j) {
                case 0: arr2.push(1); break;
                case i: arr2.push(1); break;
                default: arr2.push(arr[i - 1][j] + arr[i - 1][j - 1]);
            }
        }
        arr.push(arr2);
    }
    return arr;
}