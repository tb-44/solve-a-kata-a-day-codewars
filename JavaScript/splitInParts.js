//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

//solution
var splitInParts = function(s, partLength) {
    let i = 0;
    let result = '';
    
      while(i < s.length) {
        if(s.length - i <= partLength) {
          result += s.substring(i,s.length);
              break;
          
          } else {
              result += s.substring(i,i+partLength);
              result += ' ';
              i += partLength;
          }
      }
      return result;
  };

//others solutions
var splitInParts = function(s, partLength){
    return s.replace(new RegExp(`(.{${partLength}})(?!$)`, 'g'), '$1 ');
  }

  var splitInParts = function(s, partLength){
    var parts = [];
    var array = s.split('');
    while(array.length) {
      parts.push(array.splice(0,partLength).join(''));
    }
    return parts.join(' ');
  }