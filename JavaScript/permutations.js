// In this kata you have to create all permutations of an input string and remove duplicates, if present. 
//This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.


//solution
function permutations(str) {
    let arr = str.split('')
    let perm = [], newObj, pick, restPerms, current;
    if (arr.length === 0) return [str];
    for (var i = 0; i < arr.length; i++) {
        newObj = Object.create(arr);
        pick = newObj.splice(i, 1)[0];
        newPerm = permutations(newObj.join(''));
        for (var j = 0; j < newPerm.length; j++) {
            if (perm.indexOf(current = pick + newPerm[j]) < 0) perm.push(curr);
        }
    }
    return perm;
}

//others
function permutations(string) {
    var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
    if (string.length == 1) return [string];
    arr.forEach(function (v, i, arr) {
        if (heads.indexOf(v) == -1) {
            heads.push(v);
            tmp.splice(tmp.indexOf(v), 1);
            permutations(tmp.join('')).forEach(function (w) { out.push(v + w); });
            tmp.push(v);
        }
    });
    return out;
}

function permutations(string) {
    return (string.length == 1) ? [string] : string.split('').map(
        (e, i) => permutations(string.slice(0, i) + string.slice(i + 1)).map((e2) => e + e2)
    ).reduce((r, e) => r.concat(e)).sort().filter((e, i, a) => (i == 0) || a[i - 1] != e);
}