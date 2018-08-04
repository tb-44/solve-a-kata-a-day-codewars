// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// numberFormat(100000); // return '100,000'
// numberFormat(5678545); // return '5,678,545'
// numberFormat(-420902); // return '-420,902'

var numberFormat = function (number) {
    if (!number || isNaN(number)) {
        return 'NaN';
    }
    number = number.toString();

    while (/\d+\d{3}/.test(number)) {
        number = number.replace(/(\d+)(\d{3})/, '$1,$2');
    }
    return number;
};

//others
var numberFormat = n => (n < 0 ? '-' : '') + [...n.toString()].reverse().join('').match(/\d{1,3}/g)
    .map(a => [...a].reverse().join('')).reverse().join(',')


function numberFormat(number) {
    return number.toLocaleString();
}