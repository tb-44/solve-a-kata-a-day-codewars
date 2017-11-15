//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving 
//the original order of elements.

//solution for today
var uniqueInOrder = function (iterable) {
    var arr = [];
    var i = 0;

    while (i < iterable.length) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i])
        }
        i++;
    }
    return arr;
}

//others solutions
var uniqueInOrder = function (iterable) {
    return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

var uniqueInOrder = function (iterable) {
    return Array.prototype.reduce.call(iterable, function (a, b) { if (a[a.length - 1] !== b) a.push(b); return a; }, []);
}

var uniqueInOrder = function (iterable) {
    var result = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i - 1] === undefined || iterable[i - 1] !== iterable[i]) {
            result.push(iterable[i]);
        }
    }
    return result;
}

