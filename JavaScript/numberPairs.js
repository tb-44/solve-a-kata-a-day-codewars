//In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
//Note: Both arrays have the same dimensions.

//solution
function getLargerNumbers(a, b) {
    var arr = [];
    var i = 0;

    while (i < a.length) {
        if (a[i] > b[i]) {
            arr.push(a[i]);
        }
        else if (a[i] < b[i]) {
            arr.push(b[i]);
        }
        else if (a[i] === b[i]) {
            arr.push(a[i]);
        }
        i++;
    }
    return arr;
}

//others solutions
function getLargerNumbers(a, b) {
    var newArray = [];

    for (i = 0; i < a.length; i++) {
        newArray.push(Math.max(a[i], b[i]));
    }
    return newArray;
}

function getLargerNumbers(a, b) {
    
    b.forEach(function(element, i) {
        if (element < a[i])
            b[i] = a[i];
    });
    
    return b;
  }

  function getLargerNumbers(a, b) {
    return a.map((x, i) => Math.max(x, b[i]));
  }