// Return the inputted numerical year in century format. For example 2014, would return 21st.

// The input will always be a 4 digit string. So there is no need for year string validation

// Examples:
// Input: 1999 Output: 20th
// Input: 2011 Output: 21st
// Input: 2154 Output: 22nd
// Input: 2259 Output: 23rd
// Input: 1124 Output: 12th
// Input: 2000 Output: 20th

function whatCentury(year) {
    var cent = Math.ceil(year / 100);
    if (cent > 10 && cent < 20)
        return cent + "th";
    switch (cent % 10) {
        case 1: return cent + "st";
        case 2: return cent + "nd";
        case 3: return cent + "rd";
        default: return cent + "th";
    }
}