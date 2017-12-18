// It's Christmas! You had to wait the whole year for this moment. 
//You can already see all the presents under the Christmas tree. 
//But you have to wait for the next morning in order to unwrap them. 
//You really want to know, what's inside those boxes. But as a clever child, you can do your assumptions already.

// You know, you were a good child this year. So you may assume, that you'll only get things from your wishlist. 
//You see those presents, you can lift them and you can shake them a bit. Now you can make you assumptions about what you'll get.

// Your Task

// You will be given a wishlist (array), containing all possible items. Each item is in the format: 
//{name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

// You also get a list of presents (array), you see under the christmas tree, which have the following format each: 
//{size: "small", clatters: "no", weight: "light"}

// Your task is to create a list of all possible presents you might get.

// Rules

// Possible values for size: "small", "medium", "large"
// Possible values for clatters: "no", "a bit", "yes"
// Possible values for weight: "light", "medium", "heavy"
// The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
// Don't add any item more than once to the result
// The order of names in the returned array doesn't matter
// It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

//solution
function guessGifts(wishlist, presents) {
    return wishlist.filter(function (x) {
        return presents.some(function (y) {
            return x.size == y.size &&
                x.clatters == y.clatters &&
                x.weight == y.weight;
        });
    }).map(function (x) {
        return x.name;
    });
}

//other
function guessGifts(wishlist, presents) {
    var r = [];
    presents.forEach(function (p) {
        wishlist.forEach(function (w) {
            if (p.size == w.size && 
                p.clatters == w.clatters && 
                p.weight == w.weight && 
                r.indexOf(w.name) == -1) 
                r.push(w.name);
        });
    });
    return r;
}