// Your task is to construct a building which will be a pile of n cubes. 
//The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 
//and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. 
//Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m 
//and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m 
//if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

//solution
function findNb(m) {
    let nb = 0;
    while (m > 0) {
        nb = nb + 1;
        m = m - Math.pow(nb, 3);
    }
    return m ? -1 : nb;
}

//others solutions
function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
        n++;
        sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
}

function findNb(m) {
    var n = Math.floor(Math.pow(4 * m, 1 / 4));
    if (n * n * (n + 1) * (n + 1) / 4 != m)
        return -1;
    return n;
}