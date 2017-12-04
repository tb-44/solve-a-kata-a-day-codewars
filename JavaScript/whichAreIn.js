//Given two arrays of strings a1 and a2 return a sorted array r in 
//lexicographical order of the strings of a1 which are substrings of strings of a2.

//solution
function inArray(array1, array2) {
    var i, j, result = [];

    outer: for (j = 0; j < array1.length; j++) {
        for (i = 0; i < array2.length; i++) {
            if (array2[i].includes(array1[j])) {
                result.push(array1[j]);
                continue outer;
            }
        }
    }
    return result.sort();
}

//others solutions
function inArray(arr1, arr2) {
    return arr1.filter(function (needle) {
        return arr2.some(function (haystack) {
            return haystack.indexOf(needle) > -1;
        });
    }).sort();
}

function inArray(a1, a2) {
    var str = a2.join(' ');
    return a1.filter(s => str.indexOf(s) !== -1).sort();
}

function inArray(a1, a2) {
    return a1.filter(sub => a2.some(whole => whole.includes(sub))).sort();
}