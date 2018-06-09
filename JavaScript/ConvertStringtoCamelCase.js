// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

//solution
function toCamelCase(str) {
    str = str.split('');
    return str.map(function (e, x) {
        if (e == '-' || e == '_') {
            e = str[x + 1].toUpperCase();
            str.splice(x + 1, 1);
        }
        return e;

    }).join('');
}