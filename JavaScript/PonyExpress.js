// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

function riders(stations) {
    let distance = 1;
    let rider = 0;
    for (let station of stations)
        if (rider + station > 100)
            [distance, rider] = [distance + 1, station];
        else rider += station;
    return distance;
}