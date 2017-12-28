// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

//solutions
function kebabize(str) {
    str = str.replace(/[\d]/g, "")
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/([A-Z])/g, a => "-" + a.toLowerCase());
}

//others solutions
function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
        replace(/^[A-Z]/, c => c.toLowerCase()).
        replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function kebabize(str) {
    return str.split('').filter(v => isNaN(parseInt(v))).map(v => 
        (v.toUpperCase() === v) ? v.replace(v, '-' + v.toLowerCase()) : v.toLowerCase()).join('').replace(/^-/, '');
}