// Colour plays an important role in our lifes. Most of us like this colour better then another. 
//User experience specialists believe that certain colours have certain psychological meanings for us.

// You are given a 2D array, composed of a colour and its 'common' association in each array element. 
//The function you will write needs to return the colour as 'key' and association as its 'value'.

// For example:
// var array = ["white", "goodness"] //returns {white: 'goodness'}

//solution
function colourAssociation(array) {
    return array.map(function (e) {
        let common = {};
        common[e[0]] = e[1];
        return common;
    });
};

//other solutions
function colourAssociation(array) {
    return array.map(x => ({ [x[0]]: x[1] }));
}

function colourAssociation(array) {
    var res = [];
    array.forEach(i => res.push({ [i[0]]: i[1] }));
    return res;
}