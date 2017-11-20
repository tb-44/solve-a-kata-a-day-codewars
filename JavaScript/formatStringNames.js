//Given: an array containing hashes of names

//Return: a string formatted as a list of names separated by commas except for the last two names, 
//which should be separated by an ampersand.

//solution

function list(names) {
    return names.reduce(function (prev, current, index, array) {
        if (index === 0) {
            return current.name;

        } else if (index === array.length - 1) {
            return prev + ' & ' + current.name;

        } else {
            return prev + ', ' + current.name;
        }
    }, '');
}

//others solutions
function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }

  function list( names ){
    return names.reduce(function(prev, curr, i, arr){
      return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
    }, '');
  }

  var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")