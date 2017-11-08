//SUM THE ARRAY USING REDUCE

Array.prototype.sum = function() {
    return this.reduce((acc,curr) => 
    acc + curr, 0);
  }