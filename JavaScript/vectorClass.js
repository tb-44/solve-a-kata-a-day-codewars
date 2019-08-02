// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// a.add(b);      // should return a new Vector([4, 6, 8])
// a.subtract(b); // should return a new Vector([-2, -2, -2])
// a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
// a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c);      // throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user-provided equals method.

var Vector = function (components) {
    this.component = components;
};

Vector.prototype.add = function (c) {
    if (c.component.length !== this.component.length) {
        throw new Error("Array must be same length!");
    }

    let vect = new Vector(this.component);
    for (let i = 0; i < this.component.length; i++) {
        vect.component[i] += c.component[i];
    }
    return vect;
};

Vector.prototype.subtract = function (c) {
    if (c.component.length !== this.component.length) {
        throw new Error("Array must be same length!");
    }

    let vect = new Vector(this.component);
    for (let i = 0; i < this.component.length; i++) {
        vect.component[i] -= c.component[i];
    }
    return vect;
};

Vector.prototype.dot = function (c) {
    if (c.component.length !== this.component.length) {
        throw new Error("Array must be same length!");
    }

    let sum = 0;
    for (var i = 0; i < this.values.length; i++) {
        sum += this.component[i] * c.component[i];
    }
    return sum;
};

Vector.prototype.norm = function () {
    let sum = 0;
    for (let i = 0; i < this.component.length; i++) {
        sum += Math.pow(this.component[i], 2);
    }
    return Math.sqrt(sum);
};

Vector.prototype.equals = function (c) {
    if (c.component.length !== this.component.length) {
        throw new Error("Array must be same length!");
    }
    for (let i = 0; i < this.component.length; i++) {
        if (this.component[i] !== c.component[i]) {
            return false;
        }
    }
    return true;
};

Vector.prototype.toString = function () {
    return "(" + this.component.join(",") + ")";
};