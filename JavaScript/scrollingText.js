// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text) {
    let scroll = text.split("");
    return scroll.reduce((x, y, i) => {
        x.push(scroll.slice(i).concat(scroll.slice(0, i)).join('').toUpperCase());
        return x;
    }, []);
}
