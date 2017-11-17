//The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. 
//The association is funded through financial donations from generous benefactors. 
//John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15]
//He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 
//donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?

//The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) 
//that will permit to reach the average navg.

//Should the last donation be a non positive number (<= 0) John wants us to throw an error

//solution:

function newAvg(arr, newavg) {
    let newArr = arr.length;
    let total = newavg * (n + 1);
    let current_total = 0;
    let i = 0;

    while (i < newArr) {
        current_total += arr[i];
        i++;
    }
    if (current_total < total) {
        return Math.ceil(total - current_total);
    }
    else {
        throw new RangeError();
    }
}