//There were and still are many problem in CW about palindrome numbers and palindrome strings. 
//We suposse that you know which kind of numbers they are. 
//If not, you may search about them using your favourite search engine.

//In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) 
//that will output the smallest palindrome number higher than val.

//solution:
function nextPal(val) {
    let check = val + 1;

    while (true) {
        let checkStr = check.toString();
        let checkRev = check.toString().split('').reverse().join('');

        if (checkStr == checkRev) {
            return check;

        }
        check++;
    }
}

//others solutions
function nextPal(val) {
    for(var i=val+1;;i++){
      var str=i+'';
      if(str.split('').reverse().join('')==str)return i;
    }
}