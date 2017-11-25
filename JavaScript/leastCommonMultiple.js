//Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer. 
//In the case that there are no arguments (or the provided array in compiled languages is empty), return 1.

//solution
var lcm = function () {
    var least = [];
    for (var i = 0; i < arguments.length; i++) {
        least.push(arguments[i]);
    }
    if (least.length > 1) {
        var l = least[0] * least[1] / gcd(least[0], least[1]);
        for (i = 2; i < least.length; i++) {
            l = l * least[i] / gcd(l, least[i]);
        }
        return l;
    } else {
        return least[0];
    }
};

var gcd = function (a, b) {
    var t;
    while (b !== 0) {
        t = b;
        b = a % b;
        a = t;
    }
    return a;
};

//others solutions
var lcm = function () {
    function gcd(a,b) {
      if (a == 0) return b;
      return gcd(b%a, a);
    }
    return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
  };

  function lcm(...numbers) {
    return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
  };
  
  function gcd(...numbers) {
    return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
  }

  var lcm = function () {
    
    if(!arguments.length) return false;
    if(arguments.length == 1) return arguments[0];    
  
    var length = arguments.length,
        base   = arguments[0];
  
    for( var i=1; i < length; i++ ){
  
        var current = arguments[i],
            bbase = base;
  
             while( base && current ){
                 if( base > current ){
                    base = base % current;
                 } else {
                    current = current % base;
                 }
             }
  
             base = (bbase * arguments[i])/(base+current);
    }
    return base;
  };