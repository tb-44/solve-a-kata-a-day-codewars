//Write a function that accepts a starting and ending IPv4 address, and returns the number of IP addresses from start to end, 
//excluding the end IP address. 
//All input to the ipsBetween function will be valid IPv4 addresses in the form of strings. 
//The ending address will be at least one address higher than the starting address. 


// Examples: 
// ipsBetween("10.0.0.0", "10.0.0.50") => returns 50 
// ipsBetween("10.0.0.0", "10.0.1.0") => returns 256 
// ipsBetween("20.0.0.10", "20.0.1.0") => returns 246

//solution
function ipsBetween(start, end) {
    var startArr = start.split('.'),
        endArr = end.split('.'),
        result = 0,
        factor = 1;
    for (var i = startArr.length - 1; i >= 0; i-- , factor *= 256) {
        result += (endArr[i] - startArr[i]) * factor;
    }

    return result;
}

//other solution
function ipsBetween(start, end) {
    start = start.split('.');

    return end.split('.').reduce(function (sum, x, i) {
        return (sum << 8) + Number(x) - Number(start[i])
    }, 0);
}