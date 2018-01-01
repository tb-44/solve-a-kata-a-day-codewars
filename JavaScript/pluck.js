// Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a') // -> [1,2]
// If an object is missing the property, you should just leave it as undefined in the output array.

//solution
function pluck(objs, name) {
    return objs.map(function (n) {
        return n[name];
    });
};

//others
function pluck(objs, name) {
    var length = objs.length;
    var pluck = new Array(length);
    for (var i = 0; i < length; i++) {
        pluck[i] = objs[i][name];
    }
    return pluck;
}

function pluck(objs, name) {
    var array = [];
    objs.forEach(function (value) {
        array.push(value[name]);
    });
    return array;
}



