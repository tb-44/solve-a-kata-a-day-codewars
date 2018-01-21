// Create a complement to the Object.freeze function, Object.deepFreeze

// This method should apply the Object.freeze function to an object and, recursively, all of its properties that are objects.

// The freeze operation should prevent objects from being modified.

//solution
Object.deepFreeze = function (object) {
    Object.freeze(object);
    for (var key in object) {
        if (typeof object[key] === 'object') {
            Object.deepFreeze(object[key]);
        }
    }
}

//others
Object.deepFreeze = function (object) {
    Object.freeze(object);
    Object.keys(object).forEach(function (key) { if (typeof (object[key]) == 'object') return Object.deepFreeze(object[key]); });
}

Object.deepFreeze = function (object) {
    if (typeof (object) !== 'object') { return; }
    Object.getOwnPropertyNames(object).forEach(function (prop) {
        Object.deepFreeze(object[prop]);
    });
    Object.freeze(object);

}