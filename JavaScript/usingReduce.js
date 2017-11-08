//Use reduce() to calculate the sum of the values in an array

function sum(array) {
    return array.reduce((acc,curr) => 
    acc += curr, 0)
  }