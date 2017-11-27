//Given an array of integers, return the sum of all the integers that have an even index, 
//multiplied by the integer at the last index.

//If the array is empty, you should return 0.

//solution
function evenLast(numbers) {
    if (numbers.length === undefined || numbers.length === 0) {
        return 0
    }
    var last = numbers[numbers.length - 1]
    var filtered = numbers.filter(function (e, i, arr) {
        return (i % 2 === 0)
    })
    var sum = filtered.reduce(function (a, b) {
        return a + b;
    })
    return sum * last
}

//others solutions
function evenLast(numbers) {
    var arr = numbers.filter(  (currentValue, index, array) => index % 2 === 0).reduce( (sum,val)=>sum+val,0);
    var rst = (numbers.length > 0)?(arr*numbers[numbers.length-1]):0;
    return rst;
  }

  function evenLast(numbers) {
    let isEven = false;
    return numbers.reduce((sum, cur) => {
      isEven = !isEven;
      return isEven ? (sum + cur) : sum;
    }, 0) * numbers[numbers.length - 1] || 0;
  }

  const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0
