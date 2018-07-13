// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// get_socks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// get_socks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// getSocks("Punky", ["red","blue","blue","green"]) -> ["red", "blue"]
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

function getSocks(name, socks) {
    let howMany = [];

    if (name === 'Punky') {
        const firstColor = socks[0];
        const secondColor = socks.find(sock => sock !== firstColor);
        howMany = secondColor ? [firstColor, secondColor] : [];
    }

    else {
        const match = socks.find((s, i) => socks.indexOf(s, i + 1) !== -1);
        howMany = match ? [match, match] : [];
    }
    return howMany;
}