//The galactic games have begun!

//It's the galactic games! Beings of all worlds come together to compete in several interesting sports, like nroogring, fredling and buzzing (the beefolks love the last one). 
//However, there's also the traditional marathon run.

//Unfortunately, there have been cheaters in the last years, and the committee decided to place sensors on the track. 
//Committees being committees, they've come up with the following rule:

//A sensor should be placed every 3 and 5 meters from the start, e.g. at 3m, 5m, 6m, 9m, 10m, 12m, 15m, 18m….
//Since you're responsible for the track, you need to buy those sensors. 
//Even worse, you don't know how long the track will be! And since there might be more than a single track, 
//and you can't be bothered to do all of this by hand, you decide to write a program instead.

//solution:
function solution(number) {
    var sum = 0;
    var i = 1;

    while (i < number) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        } i++;
    }
    return sum;
}
