//MAKING COPY OF ARRAY IN JAVASCRIPT

function copyList(l){
    var i, copy;
      if(Array.isArray(l)) {
        copy = l.slice(0);
          for(var i = 0; i < copy.length; i++) {
              copy[i] = copyList(copy[i]);
          }
            return copy;
          
      } else if( typeof l === 'object' ) {
          throw 'Copy unsuccessful';
      } else {
          return l;
      }
  }

  //others solutions
  function copyList(l) {
    return l.slice();
  }

  function copyList(l){
    return (Array.isArray(l)) ? l.slice(0) : "error";
  }

  function copyList(l){return [].concat(l);}