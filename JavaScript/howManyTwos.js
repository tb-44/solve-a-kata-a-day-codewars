//Write a function that returns the number of '2's in the factorization of a number.

//solution

function twoCount(n) {
    var count = 0;

    while (true) {
        if (n % 2 === 0) {
            count++;
            n /= 2;

        } else { break }
    }
    return count;
};

//other's solutions
let twoCount = n => (n % 2 == 0) ? 1 + twoCount(n/2) : 0

function twoCount(n) {
    let num = 0
    while (n > 0 && n % 2 === 0) {
      n = n / 2
      num++
    }
    return num
  }

  function twoCount(n) {
    return n.toString(2).replace(/^.*?(0*)$/, (_, z) => z).length
  }
  

