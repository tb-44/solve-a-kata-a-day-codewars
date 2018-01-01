// Let's implement the range function:

// range([start], stop, [step])

// range(1, 11);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// range(1, 4, 0); // /!\ note that the step is 0
// => [1, 1, 1]

// range(0);
// => []

// range(10, 0); // /!\ note that the end is before the start
// => []

// range(10);
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// range(0, 30, 5);
// => [0, 5, 10, 15, 20, 25]
// start, if omitted, defaults to 0; step defaults to 1.

// Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.

// Note that ranges that stop before they start are considered to be zero-length instead of negative.

//solution:

function range(start, end, step) {
    if (arguments.length === 1) return range(0, start, 1);
    if (arguments.length === 2) return range(start, end, 1);
    var result = [];
    for (var i = 0; i < (end - start) / (step || 1); i++) {
        result.push(start + (i * step));
    }
    return result;
}

//other

function range(start, end, step) {

    var result = [],
        a = arguments.length == 1 ? 0 : start,
        b = arguments.length == 1 ? start : end,
        c = step != void (0) ? step : 1;
    if (b < a) return result;

    for (var i = a; (step == 0 ? result.length + a : i) < b; i = i + c) {
        result.push(i);
    }
    return result;
}

function range(start, end, step) {
    if (end == null) {
        end = start;
        start = 0;
    }
    if (step == null) {
        step = 1;
    }

    if (start > end) {
        return [];
    }

    var values = [];

    var i = start;
    var j = start;
    while (i < end) {
        if (step == 0) {
            values.push(start);
            i++;
            continue;
        }
        else {
            values.push(i);
            i += step;
        }
    }

    return values;

}