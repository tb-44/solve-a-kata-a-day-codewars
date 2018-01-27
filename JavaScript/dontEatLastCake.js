// Welcome Warrior! Let's play a game!

// You've gotten challenged by a lot of kata, now it's time for you to challenge the kata!

// Inside a room, there is a table with a pile of cakes. One of these cakes is filled with poison. Every turn, we will take cakes from this pile and eat them, leaving the last one to be the poisonous cake. Whoever eats the poisonous cake will die. The poisonous cake is clearly marked, so you do not have to guess. Rather you need to rely on your logic to save you.

// The rules are simple:
// Do not eat the last cake. It's obivious that poisonous cake will be the last to be eaten, so, DON'T EAT THE LAST CAKE. Try to make your opponent eat it.

// When it is your turn, you can only take one, two or three cakes. The same rules apply to your opponent on there turn. You cannot skip your move, so choose wisely how many cakes to eat. Both opponents will be able to see how many cakes the other eats on each turn.

// You cannot copy your opponent's previous move, likewise they cannot copy yours. If your opponent takes one cake, next move you can only choose between two or three. If you take three cakes, your opponent can only choose one or two. This doesn't effect the first move, only to subsequent.

// If one of the players has no valid moves (e.g one cake left and previous move was one cake), that player will lose his turn and be skipped. Then the other player will be forced to eat the last cake. This is the ONLY case of turn skipping.

// You can choose whether or not to go first. This decision is key to victory, so don't hurry, choose wisely!

//solution
function Player() { }

Player.prototype.firstmove = function (cakes) {
    if (cakes > 2 && cakes % 4 != 2)
        return true;
    return false;
}

Player.prototype.move = function (cakes, last) {
    return cakes % 4 < 3 ? 3 : 1;
}

//others
function Player() { }
Player.prototype.firstmove = function (cakes) { return cakes % 4 != 2 && cakes != 1 }
Player.prototype.move = function (cakes, last) { return cakes % 4 == 0 ? (last == 3 ? 2 : 3) : (cakes + 2) % 4 }


function Player() { }
// Decide who moves first - player or opponent (true if player)
Player.prototype.firstmove = function (cakes) {
    return !(cakes == 1 || cakes % 4 == 2)
}
// Decide your next move
Player.prototype.move = function (cakes, last) {
    return [last == 2 ? 3 : 2, 3, null, 1][cakes % 4]
}