//Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's 
//divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) 
//(use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

//solution
function divisors(integer) {
    var divisor = [];
    var num = 2;

    while (num <= integer / 2) {
        if (integer % num === 0) {
            divisor.push(num);
        }
        num++
    }

    if (divisor.length === 0) {
        return integer.toString() + ' is prime'

    } else {
        return divisor;
    }
}

//other's solutions
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };

  function divisors(integer) {
    var divs = [];
    
    for(var i = 2; i < integer; i++) {
      if(integer % i === 0) {
        divs.push(i);
      }
    }
    
    return divs.length ? divs : integer + ' is prime';
  };