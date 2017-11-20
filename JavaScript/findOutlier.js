//You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

//solution

function findOutlier(integers) {
    var a = [],
        b = [];

    integers.map(function (val) {
        val % 2 === 0 ? a.push(val) : b.push(val);
    });

    return a.length === 1 ? a[0] : b[0];
}

//other solutions:
function findOutlier(integers){
    const even = integers.filter(int => int % 2 === 0);
    const odd  = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
  }

  function findOutlier(integers){
    var res;
    var odd = integers.filter(function(e){
      if(e%2 != 0){
        res = e;
      };
      return e%2 == 0;
    });
    
    return odd.length>1 ? res : odd.pop();
  }

  function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
  }
  function even(num){
    return (num % 2 == 0);
  }
  function odd(num){
    return !even(num)
  }