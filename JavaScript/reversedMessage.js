//Reverse a message so that the words and letters passed into it are made lower case and reversed. 
//In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) 
//is now in the first position of the word, no capitalisation needs to occur.

//solution:

function reverseMessage(str) {
    let reverseArr = str.toLowerCase().split('').reverse();
    reverseArr = reverseArr.join('').split(' ');
    let arr = [];

    for (var i = 0; i < reverseArr.length; i++) {
        let capFirst = reverseArr[i].charAt(0).toUpperCase();
        let word = reverseArr[i].slice(1);
        arr[i] = capFirst + word;
    }
    return arr.join(' ');
} 

//others solutions
function reverseMessage(str) {
    if(str=='')return ''
    if(str){
    str=str.toLowerCase().split('').reverse().join('').split(' ').map(a=>a[0].toUpperCase()+a.substr(1)).join(' ')
    return str
    }}

    const reverseMessage = s => s && s.split(" ").reverse().map( v => v.split("").reverse().join("").toLowerCase() ).map( v => console.log(v) || v[0].toUpperCase() + v.slice(1) ).join(" ") ;

    function reverseMessage(str) {
        return str? str.split('').reverse().map(a=>a.toLowerCase()).join('')
              .split(' ').map(b=>{ b = b.split(''); b[0] = b[0].toUpperCase();
               return b.join(''); }).join(' ') : '';
    }