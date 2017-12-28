// Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

//solution
const reverseSeq = n => {
    let result = [];
    for (let i = n; i >= 1; i--) {
        result.push(i);
    }
    return result;
};

//other solutions
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i);
};

const reverseSeq = n => {
    if (n < 2) return [n]
    return [n].concat(reverseSeq(n - 1));
};
