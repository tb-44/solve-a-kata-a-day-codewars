//x Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

//my solution
function findShort(s){
    var splitter = s.split(' ');
    var short = splitter.reduce(function(r, a) {
      return Math.min(r, a.length);
    }, Infinity)
    return short;
  }


//other solutions
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  function findShort(s){
    var a = s.split(' ');
    var shortWord=a[0].length;
    for(var i=0; i<a.length; i++){
       if(a[i].length < shortWord) {
         shortWord = a[i].length;
      }
     
    }
     return shortWord;
   }

   const findShort = s => Math.min(...s.split(' ').map(x => x.length));
