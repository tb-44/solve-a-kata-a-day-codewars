// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

//solution
var sum_pairs = function (ints, s) {
    let ind = {};
    let result = [ints.length, ints.length];
    for (let i = 0; i < ints.length; i++) {
        if (!(ints[i] in ind))
            ind[ints[i]] = [];
        ind[ints[i]].push(i);
    }
    for (let i = 0; i < ints.length; i++) {
        if (s - ints[i] == ints[i]) {
            if (ints[i] in ind && ind[ints[i]].length >= 2) {
                if (ind[ints[i]][1] < result[1])
                    result = [i, ind[ints[i]][1]];
                delete ind[ints[i]];
            }
        }
        else if ((s - ints[i]) in ind) {
            if (ind[s - ints[i]][0] < result[1])
                result = [i, ind[s - ints[i]][0]];
            delete ind[s - ints[i]];
            delete ind[ints[i]];
        }
    }
    return result[1] == ints.length ? undefined : [ints[result[0]], ints[result[1]]];
}

//others
var sum_pairs = function (ints, s) {
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true
    }
}

let sum_pairs = (a, s) => {
    let mem = {};
    for (x of a)
        if (mem[s - x])
            return [s - x, x];
        else
            mem[x] = 1;
}