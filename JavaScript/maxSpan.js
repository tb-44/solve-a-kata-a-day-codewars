// Consider the leftmost and righmost appearances of the same value in an array. We'll say that the "span" is the number of elements between the the same elements (two inclusive). 
//Return the largest span found in the given array.

//solution
const maxSpan = (array) => {
    var max = 0;
    for (let i = 0; i < array.length; i++) {
        var j = array.length - 1;
        while (array[i] != array[j])
            j--;
        var span = j - i + 1;
        if (span > max) {
            max = span;
        }

    }
    return max;
}

//other solutions:
const maxSpan = (array) => {
    let temp = {};
    let max;
    let diff;

    array.forEach(function (val, i) {
        val = val.toString();
        temp[val] ? temp[val].push(i) : temp[val] = [i];
    })

    for (let prop in temp) {
        prop = temp[prop];
        if (prop.length >= 2) {
            diff = prop[prop.length - 1] - prop[0];
            max = max ? ((max > diff) ? max : diff) : diff;
        }
    }
    return max + 1;
}

const maxSpan = (array) => {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        var currSpan = array.lastIndexOf(array[i]) - array.indexOf(array[i]) + 1;
        max = currSpan > max ? currSpan : max;
    }
    return max;
}