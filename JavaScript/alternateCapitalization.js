//ALTERNATING CAPITALIZATION

//my solution:
function capitalize(s){
    let str = s.split('')
    var oddArr = []
    oddArr.push(str[0])
    str[0] = str[0].toUpperCase()
    
    for (var i = 1; i < str.length; i++) {
      if (i % 2 === 0) {
        oddArr.push(str[i])
        str[i] = str[i].toUpperCase()   
      } else {
        oddArr[i] = str[i].toUpperCase()
      }
    }
      var evenStr = str.join('')
      var oddStr = oddArr.join('')
      return [evenStr, oddStr]
  }

  //other's solutions

function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
  };

  /////

  let capitalize = s => [s.split``.map((c, i) => i % 2 ? c : c.toUpperCase()).join``, s.split``.map((c, i) => i % 2 ? c.toUpperCase() : c).join``];

  function capitalize(s){
    return [s.split('').map((v,i)=>!(i%2) ? v.toUpperCase() : v).join(''), s.split('').map((v,i)=>i%2?v.toUpperCase() : v).join('')];
  }

  /////

  const capitalize = s => {
    return [
      s
      .split('')
      .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
      .join(''),
  
      s
      .split('')
      .map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char)
      .join('')
    ]
  };