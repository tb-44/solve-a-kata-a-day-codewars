// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

function mix(s1, s2) {
    let count = c => c.replace(/[^a-z]/g, '').split('').sort().reduce((a, b) => (a[b] = 1 + (a[b] || 0), a), {});
    s1 = count(s1);
    s2 = count(s2);

    let result = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
    keys.forEach(key => {
        let a1 = s1[key] || 0;
        let a2 = s2[key] || 0;
        let count = Math.max(a1, a2);
        if (count > 1) {
            let now = [1, '=', 2][Math.sign(a2 - a1) + 1];
            let countStr = [...Array(count)].map(_ => key).join('');
            result.push(now + ':' + countStr);
        }
    });
    return result.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}

//other solution
function mix(s1, s2) {
    var ret = {};
    var tmp = [];
    var regex = /[a-z]/g;
    var clbk = function (i, p) {
        ret[p] ? null : ret[p] = ['', ''];
        ret[p][i] += p;
    };
    var cek = function (arr, i) {
        if (ret[i][1].length > ret[i][0].length)
            return [2, ret[i][1]];
        if (ret[i][1].length < ret[i][0].length)
            return [1, ret[i][0]];
        return ['=', ret[i][0]];
    };
    var sortLogic = function (a, b) {
        if (a[1].length > b[1].length)
            return -1;
        if (a[1].length < b[1].length)
            return 1;
        if (a[0] === '=' && b[0] !== '=')
            return 1;
        if (a[0] !== '=' && b[0] === '=')
            return -1;
        if (a[0] !== '=' && b[0] !== '=') {
            if (a[0] > b[0]) return 1;
            if (a[0] < b[0]) return -1;
        }
        return a[1].localeCompare(b[1]);
    };
    s1.replace(regex, clbk.bind({}, 0));
    s2.replace(regex, clbk.bind({}, 1));

    for (var i in ret)
        if (ret[i][0].length > 1 || ret[i][1].length > 1)
            tmp.push(cek(ret, i));

    return tmp.sort(sortLogic).map(e => e.join(':')).join('/');
}