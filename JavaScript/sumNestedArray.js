//Implement a function to calculate the sum of the numerical values in a nested list.

//solution
const sumNested = arr => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            sum += arr[i];

        } else if (arr[i] instanceof Array) {
            sum += sumNested(arr[i])
        }
    }
    return sum;
};

//others solutions
const sumNested = arr => {
    if (arr.length == 0) return 0;
    var value = (Array.isArray(arr[0])) ? sumNested(arr[0]) : arr[0];
    return sumNested(arr.slice(1, arr.length)) + value;
};

const sumNested = arr => arr.reduce((p, c) => p + +(c.length ? sumNested(c) : c), 0);

const sumNested = arr => {
    if (!arr.length) {
        return 0;
    }

    var total = 0;
    arr.forEach(item => {
        if (Number.isInteger(item)) {
            total += parseInt(item, 10);
        } else {
            total += parseInt(sumNested(item), 10);
        }
    });
    return total;
};