// You are given a list/array which contains only integers (positive and negative). 
//Your job is to sum only the numbers that are the same and consecutive. 
//The result should be one list.

// Extra credit if you solve it in one line. 
//You can asume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:
// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

//solution
function sumConsecutives(s) {
    let i = 0, answer = [], sum = 0;
    let flag = false;
    while (i < s.length) {
        if (s[i] === s[i + 1]) {
            sum += s[i];
            flag = true;
        }
        else if (s[i] !== s[i + 1] && flag === false) {
            answer.push(s[i]);
        }
        else if (s[i] !== s[i + 1] && flag === true) {
            sum += s[i];
            flag = false;
            answer.push(sum);
            sum = 0;
        }
        i++;
    }
    return answer;
}

//others
function sumConsecutives(s) {
    return s.reduce(function (prev, curr, i, arr) {
        if (curr != arr[i - 1]) prev.push(curr);
        else prev[prev.length - 1] += curr;
        return prev;
    }, []);
}

function sumConsecutives(s) {
    var sum = 0,
        sums = [];
    for (var i = 0; i < s.length; i++) {
        sum += s[i];
        if (s[i] != s[i + 1]) {
            sums.push(sum);
            sum = 0;
        }
    }
    return sums;
}