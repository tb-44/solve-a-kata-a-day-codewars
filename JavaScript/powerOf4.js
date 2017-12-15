//Write a method that returns true if a given parameter is a power of 4, and false if it's not. 
//If parameter is not an Integer (eg String, Array) method should return false as well. 
//(In C# Integer means all integer Types like Int16,Int32,.....)

//solution
function powerOf4(n) {
    if (typeof n != 'number')
        return false;
    let log = Math.log10(n) / Math.log10(4);
    return Math.floor(log) == log ? n > 1 ? true : false : false;
}

//other solutions
function powerOf4(n) {
    if (n < 4) return false;
    while (n >= 4) n /= 4;
    return n === 1;
}

function powerOf4(n) {
    return n > 0 && !isNaN(n) && !(n % 4);
}

function powerOf4(n) {
    if (n !== (n | 0)) return false;
    return /^10+$/.test(n.toString(4));
}

