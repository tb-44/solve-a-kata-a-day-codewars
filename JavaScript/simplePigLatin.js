//Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
//Leave punctuation marks untouched.

//solution
function pigIt(str){
    return str.split(' ').map(function(e){
      return e.slice(1) + e.slice(0,1) + 'ay';
    }).join(' ');
  }

//others solutions
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');

  function pigIt(str){
    result = str.split(' ')
    for (i = 0; i < result.length; i++) {
      result[i] = result[i].substring(1) + result[i].substring(0,1) + 'ay'
    }
    return result.join(' ')
  }
  