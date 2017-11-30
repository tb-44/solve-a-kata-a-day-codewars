//Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. 
//Overlapping intervals should only be counted once.

//Intervals

//Intervals are represented by a pair of integers in the form of an array. 
//The first value of the interval will always be less than the second value. 
//Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

//solution
function sumIntervals(intervals) {
    var num = [];
    intervals.forEach(function (interval) {
        for (var i = interval[0]; i < interval[1]; i++) {
            if (num.indexOf(i) == -1) num.push(i);
        }
    });
    return num.length;
}

//other solutions
function sumIntervals(intervals) {
    return intervals
        .sort(function (a, b) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        .reduce(function (acc, interval) {
            if (interval[1] > acc.top) {
                acc.total += interval[1] - Math.max(interval[0], acc.top);
            }
            acc.top = Math.max(interval[1], acc.top);
            return acc;
        }, { total: 0, top: 0 })
        .total;
}

function sumIntervals(intervals) {
    var numbers = {};
    intervals.forEach(function (x) {
        for (var i = x[0]; i < x[1]; i++) {
            numbers[i] = i;
        }
    });
    return Object.keys(numbers).length;
}