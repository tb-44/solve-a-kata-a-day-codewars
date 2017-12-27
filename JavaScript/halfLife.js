// The half-life of a radioactive substance is the time it takes (on average) for one-half of its atoms 
//to undergo radioactive decay.

// Task Overview
// Given the initial quantity of a radioactive substance, the quantity remaining after a given period of time, 
//and the period of time, return the half life of that substance.

// Usage Examples
// // if quantity halves in 1 time period, half-life = 1
// halfLife(10, 5, 1) => 1
// // if quantity halves in 2 time periods, half-life = 2
// halfLife(8,4,2) => 2
// // if quantity is one-quarter after 2 time periods, half-life = 1
// halfLife(12,3,2) => 1

//solution
function halfLife(quantityInitial, quantityRemaining, time) {
    let q = quantityRemaining / quantityInitial;
    let n = Math.log(q) / Math.log(0.5)
    return time / n
}

//other solutions
let halfLife = (m, n, t) => -t * Math.LN2 / Math.log(n / m);

const halfLife = (quantityInitial, quantityRemaining, time) => time / Math.log2(quantityInitial/quantityRemaining) ;