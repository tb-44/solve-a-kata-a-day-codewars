//Your task is to create a new implementation of modpow so that it computes (x^y)%n for large y. 
//The problem with the current implementation is that the output of Math.pow is so large on our inputs that it won't fit in a 64-bit float.

//You're also going to need to be efficient, because we'll be testing some pretty big numbers.

//solution
function modpow(x, y, n) {
    let mod = 1;
    while (y) {
        if (y % 2) {
            mod = (mod * x) % n
        }
        x = (x * x) % n;
        y = Math.floor(y / 2)
    }
    return mod;
}

//others solutions
function modpow(x, y, n) {
    var b = 1;
    while (y) ((!(y % 2)) && (y /= 2) && (x = (x * x) % n)) || ((y--) && (b = (b * x) % n));
    return b;
}

function modpow(x, y, n) {
    var a = x;
    var b = 1;
    while (y) {
        if (!(y & 1)) {
            y >>= 1;
            a = (a * a) % n;
        } else {
            y--;
            b = (b * a) % n;
        }
    }
    return b;
}

