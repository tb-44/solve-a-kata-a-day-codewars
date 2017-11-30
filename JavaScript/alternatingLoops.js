//Write function combine()
//that combines arrays by alternatingly taking elements passed to it.

//E.g

//combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
//combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
//combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
//Arrays can have different lengths.

//solution
function combine() {
    let arr = Array.prototype.slice.call(arguments);
    let max_length = 0;
    let i = 0;
    while (i < arr.length) {
        if (max_length < arr[i].length) {
            max_length = arr[i].length;
        }
        i++;
    }

    let result = [];

    i = 0;
    while (i < max_length) {
        var j = 0;
        while (j < arr.length) {
            if (i < arr[j].length) {
                result.push(arr[j][i]);
            }
            j++;
        }
        i++;
    }

    return result;
}

//others solutions
function combine(...arrs) {
    var max = arrs.reduce((n, arr) => Math.max(n, arr.length), 0)
    var res = []
    for (var i = 0; i < max; i++) {
        for (var arr of arrs) {
            if (i in arr) res.push(arr[i])
        }
    }
    return res
}

const combine = (...arrs) =>
    arrs.reduce((acc, arr, i) => {
        return arr.forEach((item, j) =>
            acc[j * arrs.length + i] = item
        ), acc;
    }, []).filter(Boolean);

function combine(...arrays) {
    let maxLen = arrays.reduce((n, arr) => Math.max(n, arr.length), 0),
        result = [],
        i = 0;

    for (; i < maxLen; i++) {
        for (let arr of arrays) {
            if (i in arr) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}