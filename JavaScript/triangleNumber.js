//A triangle number is a number where n objects form an equilateral triangle 
//(it's a bit hard to explain). For example, 6 is a triangle number because you can arrange 6 objects into an equilateral triangle:

//8 is not a triangle number because 8 objects do not form an equilateral triangle:

//In other words, the nth triangle number is equal to the sum of the n natural numbers from 1 to n.

//Your task:

//Check if a given input is a valid triangle number. Return true if it is, false if it is not (note that any non-integers, including non-number types, are not triangle numbers).

//You are encouraged to develop an effective algorithm: test cases include really big numbers.

//solution:
function isTriangleNumber(number) {
    if (number === 0 || number === 1) {
        return true;
    }
    let num = number * 2;
    let c = 0;
    let i = 1;
    while (i < num / 2) {
        if (i * (i + 1) === num) {
            c = 1;
            break;
        }
        i++
    }
    if (c === 1) {
        return true;
    } else {
        return false;
    }
}

//others solutions:
function isTriangleNumber(number) {
    var sum = 0;
    var step = 0;
    while (sum < number) {
      step++;
      sum += step;
    }
  
    return sum === number;
  }

  function isTriangleNumber(number) {
    n = (Math.sqrt(8 * number+1) - 1) / 2
    return Math.ceil(n) == n
  }