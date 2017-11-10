//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//Example:

//greet("maya") # returns "Hello Maya!"
//greet("JACK") # returns "Hello Jack!"

var greet = function(name) {
    return "Hello " + name[0].toUpperCase() 
    + name.slice(1).toLowerCase()
    + "!";
 };