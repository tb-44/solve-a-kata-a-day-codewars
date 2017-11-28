//You've been going to the gym for some time now and recently you started taking care of your nutrition as well. You want to gain some weight but who wants to bother counting calories every day. 
//It said somewhere that protein is the foundation of building muscle, so let's try to calculate the total amount of calories and proteins we take in.

//Given an array of meals where each element is a string in the form
//'300g turkey, 300g potatoes, 100g cucumber'
//find out how many proteins and calories you consumed. You like to keep things simple so all values will be expressed in grams. 
//In case you didn't know every gram of protein and carbohydrate has 4 calories, while 1 gram of fat provides 9 calories. 
//An object food (in Ruby $food ) is preloaded for you that contains the information about the given food per 100 grams:

//Round your results to 2 decimal places and return a string in the form "Total proteins: n grams, Total calories: n".
//Delete all trailing zeros on every float and remove trailing point if the result is an integer.

//solution
function bulk(arr) {
    let pro = 0;
    let carb = 0;

    if (arr !== []) {
        for (let i = 0; i < arr.length; i++) {
            items = arr[i].split(",")
            for (item = 0; item < items.length; item++) {
                unit = items[item].split("g ")
                protein = (parseInt(unit[0]) / 100) * food[unit[1]][0]
                carbohydrate = (parseInt(unit[0]) / 100) * food[unit[1]][1]
                fat = (parseInt(unit[0]) / 100) * food[unit[1]][2]
                pro += protein
                carb += (protein * 4) + (carbohydrate * 4) + (fat * 9)
            }
        }
    }
    return "Total proteins: " + pro.toString() + " grams, Total calories: " + carb.toString();
}

//others solutions
function bulk(arr) {

    var proteins = arr.map(m => m.split(',').map(a => {
        var b = a.trim().split(' ');
        return food[b[1]][0] * (+(b[0].slice(0, -1)));
    }).reduce((p1, p2) => p1 + p2)).reduce((p1, p2) => p1 + p2, 0) / 100;
    var calories = arr.map(m => m.split(',').map(a => {
        var b = a.trim().split(' ');
        var g = (+(b[0].slice(0, -1)));
        return food[b[1]][0] * g * 4 + food[b[1]][1] * g * 4 + food[b[1]][2] * g * 9;
    }).reduce((p1, p2) => p1 + p2)).reduce((p1, p2) => p1 + p2, 0) / 100;;

    return "Total proteins: " + proteins + " grams, Total calories: " + calories;
}

function bulk(arr) {
    let res = [].concat(...arr.map(x => x.split(', ')))
        .map(x => [(+x.split('g ')[0]) / 100, x.split('g ')[1]])
        .map(x => {
            let a = food[x[1]];
            return [a[0] * x[0], a[1] * x[0], a[2] * x[0]];
        }).reduce((a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]], [0, 0, 0])
    return `Total proteins: ${res[0]} grams, Total calories: ${Math.round(((res[0] + res[1]) * 4 + res[2] * 9) * 100) / 100}`
}