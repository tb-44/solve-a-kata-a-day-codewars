//Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//For example:
//str1 is 'rkqodlw' and str2 is 'world' the output should return true.
//str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
//str1 is 'katas' and str2 is 'steak' should return false.

//Only lower case letters will be used (a-z). No punctuation or digits will be included.
//Performance needs to be considered

//solution
function scramble(str1, str2) {
    let arr1 = str1.split('').sort();
    let arr2 = str2.split('').sort();
    let scr = 0;

    for (var i = 0; scr < arr2.length && i <= arr1.length; i++) {
        if (arr2[scr] === arr1[i]) {
            scr++;
        }
    }
    return (i <= arr1.length);
}

//others solutions
function scramble(str1, str2) {
    var map = {};
    for (var i in str1) {
        map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1;
    }
    for (var i in str2) {
        if (!map[str2[i]]) return false;
        map[str2[i]]--;
    }
    return true;
}

function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}

function scramble(str1, str2) {
    let alph = str1.split('').reduce((p, c) => { return p[c] = (p[c] || 0) + 1, p; }, {});
    return str2.split('').every(v => alph[v]-- > 0);
}