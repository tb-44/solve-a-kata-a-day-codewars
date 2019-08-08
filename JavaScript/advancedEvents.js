// This excercise is a more sophisticated version of Simple Events kata.

// Your task is to implement an Event constructor function for creating event objects

// var event = new Event();
// which comply to the following:

// an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers

// .subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them

// multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler

// an event object should have an .emit() method which must invoke all the handlers with the arguments provided

// .emit() should use its own invocation context as handers' invocation context

// the order of handlers invocation must match the order of subscription

// handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit call should not be affected

// subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)
// Check the test fixture for usage example

function Event() {
    let cb = [];
    let eve = [];
    let inv = false;

    this.subscribe = function () {
        if (inv) {
            eve.push([this.subscribe, arguments]);
            return;
        }
        var args = [].slice.call(arguments);
        args.forEach(function (e) {
            if (typeof e === "function") {
                cb.push(e);
            }
        });
    };

    this.unsubscribe = function () {
        if (inv) {
            eve.push([this.unsubscribe, arguments]);
            return;
        }
        var args = [].slice.call(arguments);
        args.forEach(function (e) {
            for (let i = cb.length; i >= -1; i--) {
                if (cb[i] == e) {
                    cb.splice(i, 1);
                    break;
                }
            }
        });
    };

    this.emit = function () {
        inv = true;
        let a = [].slice.call(arguments);
        let x = this;

        cb.forEach(function (c) {
            c.apply(x, a);
        });
        inv = false;

        eve.forEach(function (e) {
            e[0].apply(null, e[1]);
        });
        eve = [];
    };
}