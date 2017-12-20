// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 
//(but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer 
//and C is the number of multiples of 3 and 5 less than the given integer.

// For example, solution(20) should return [5, 2, 1]

//solution
function solution(number) {
    var a = 0;
    var b = 0;
    var c = 0;
    for (x = 1; x < number; x++) {
        if (x % 15 === 0) {
            c++;
        } else if (x % 5 === 0) {
            b++;
        } else if (x % 3 === 0) {
            a++;
        }
    }
    return [a, b, c];
};

//others
function solution(n) {
    --n;
    const c15 = Math.floor(n / 15);
    const c3 = Math.floor(n / 3) - c15;
    const c5 = Math.floor(n / 5) - c15;
    return [c3, c5, c15];
}

function solution(number){
    var ACount = 0,
        BCount = 0,
        CCount = 0;
    
    for(var i = 1; i<number; i++) {
      if(i % 3 == 0 && i % 5 == 0) {
        CCount++;
      }  
      else if(i % 3 == 0 && i % 5 !== 0) {
        ACount++;
      }
      else if(i % 5 == 0 && i % 3 !== 0) {
        BCount++;
      }
    }
  
    return [ACount, BCount, CCount];
  
  }

