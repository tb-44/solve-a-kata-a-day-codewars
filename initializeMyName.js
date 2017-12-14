//Some people just have a first name; some people have first and last names and some people have first, middle and last names.

//You task is to initialize the middle names (if there is any).

//For example,

// 'Jack Ryan' => 'Jack Ryan'
// 'Lois Mary Lane' => 'Lois M. Lane'
// 'Dimitri' => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

//solution
function initializeNames(name) {
    name = name.split(' ');
    for (let i = 1; i < name.length - 1; i++)
        name[i] = name[i][0] + '.';
    return name.join(' ');
}

//other solutions
function initializeNames(name) {
    var n = name.split(" ");
    if (n.length < 3) return name;
    for (i = 1; i < n.length - 1; i++) {
        n[i] = n[i][0] + ".";
    }
    return n.join(" ");
}

const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')

function initializeNames(name) {
    var arr = name.split(' ');
    for (var i = 1; i < arr.length - 1; i++)
        arr[i] = arr[i].charAt(0) + '.';
    return arr.join(' ');
}

function initializeNames(name) {
    return name.split(' ').map((e, i, a) => i == 0 || i == a.length - 1 ? e : e[0] + '.').join(' ');
}