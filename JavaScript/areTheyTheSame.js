//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. 
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

//Examples
//Valid arrays

//a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

//a = [121, 144, 19, 161, 19, 144, 19, 11] 
//b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

function comp(array1, array2) {
    let arr = [];
    for (let i = 0; i < array1.length; i++) {
        arr.push(array1[i] * array1[i]);
    }
    if (arr === null || array2 === null || arr.length !== array2.length) {
        return false;
    }

    if (arr.sort().join('') === array2.sort().join('')) {
        return true;
    } else {
        return false;
    }
}

function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(array1, array2) {
    let arr1 = array1 ? array1.map(e => e * e).sort((a, b) => a - b) : 1;
    let arr2 = array2 ? array2.sort((a, b) => a - b).join('') : 1;
    return arr1.join('') == arr2;
}

const comp = (array1, array2) =>
    Array.isArray(array1) &&
    Array.isArray(array2) &&
    array1.every(item => {
        const index = array2.indexOf(Math.pow(item, 2))
        return index > -1 ? array2.splice(index, 1) : false
    })
