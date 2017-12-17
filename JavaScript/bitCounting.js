//Write a function that takes an (unsigned) integer as input, and returns the number of bits 
//that are equal to one in the binary representation of that number.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//solution
var countBits = function (n) {
    var count = 0;
    while (n > 0) {
        if (n & 1 === 1)
            count++;
        n >>= 1;
    }
    return count;
};

//other solution
var countBits = function (n) {
    return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
};