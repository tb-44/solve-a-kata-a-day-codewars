// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0


var countChange = function (money, coins) {
    let arr1 = [];
    let arr2 = [];

    if (money <= 0)
        return 0;

    if (!coins) {
        coins = [];
        for (var i = 1; i <= money; i++)
            coins[i] = i;
    }

    for (var i = 0; i <= money; i++)
        arr1[i] = arr2[i] = 0;
    arr1[0] = 1;

    for (var i = 0; i < coins.length; i++) {
        for (var j = 0; j <= money; j++)
            for (var k = 0; j + k <= money; k += coins[i])
                arr2[j + k] += arr1[j];

        for (var j = 0; j <= money; j++)
            arr1[j] = arr2[j], arr2[j] = 0;
    }
    return arr1[money];
}