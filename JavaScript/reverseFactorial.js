//REVERSE FACTORIAL
//my solution

function reverseFactorial(num) {
    var rev = 1;
      while(num > 1 && Math.round(num) === num) {
        rev += 1;
        num /= rev;
      }
      if (num === 1) {
        return rev + "!";
      } else {
        return "None"
      }
  }

  //other's solutions
  function reverseFactorial(num) {
    let f = 1, x = 1;
    while( f < num ) f = ++x*f;
    return f==num ? x+"!" : "None"
  }

  function reverseFactorial(n) {
    var i = 1;
    while(n>1) n /= ++i;
    return n === 1 ? i+'!' : 'None';
  }