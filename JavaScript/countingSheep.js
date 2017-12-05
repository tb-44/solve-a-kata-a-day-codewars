//Consider an array of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

//solution
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++
        }
    }
    return count;
}

//others solutions
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
    var num = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;

    return num;
}