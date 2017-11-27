//The goal of this Kata is to return the greatest distance of index positions between matching 
//number values in an array or 0 if there are no matching values.

//Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the 
//matching '1' values at index 2 and 5. Executing greatestDistance against this array would return 3. (i.e. 5 - 2)

//solution
var greatestDistance = function (data) {
    let distance = 0;
    let i = 0;

    while (i < data.length) {
        var j = i + 1;
        while (j < data.length) {
            if (data[j] === data[i]) {
                if (j - i > distance) {
                    distance = j - i;
                }
            }
            j++;
        }
        i++;
    }
    return distance;
};

//others solutions
var greatestDistance = function (data) {
    return data.reduce(function (d, v, i) { return Math.max(data.lastIndexOf(v) - i, d) }, 0)
};

var greatestDistance = (data) => data.reduce((p, c, i) => Math.max(data.lastIndexOf(c) - i, p), 0);

var greatestDistance = function (data) {
    var result = 0;
    for (let i = 0; i < data.length; i++) {
        for (let h = 0; h < data.length; h++) {
            if (data[i] === data[h]) {
                var x = Math.abs(i - h);
                if (x > result) {
                    result = x;
                }
            }
        }
    }
    return result;
};