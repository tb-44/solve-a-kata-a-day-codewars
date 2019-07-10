// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should not be removed, but every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is: " *\n ***\n*****\n ***\n *\n"

function diamond(n) {
    let diam = [];
    if (n % 2 == 0 || n < 1) {
        return null;
    }
    for (let i = n, space = 0; i >= 1; i -= 2, space += 1) {
        diam.push(' '.repeat(space) + '*'.repeat(i) + "\n");
        if (i < n) {
            diam.unshift(' '.repeat(space) + '*'.repeat(i) + "\n");
        }
    }
    return diam.join('');
}