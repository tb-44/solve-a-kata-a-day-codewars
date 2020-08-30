// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

import java.util.Arrays;

public class CoinChange {
    public int coinChange(int[] coins, int amount) {
        Arrays.sort(coins);
        int[] min = new int[] { Integer.MAX_VALUE };
        dfs(coins, coins.length - 1, 0, amount, min);
        return min[0] < Integer.MAX_VALUE ? min[0] : -1;
    }

    private void dfs(int[] coins, int cur, int used, int amount, int[] min) {
        int val = coins[cur];
        for (int count = amount / val; count >= 0; --count) {
            int remain = amount - val * count;
            if (remain < 0)
                continue;
            if (remain == 0) {
                min[0] = Math.min(min[0], used + count);
                return;
            }
            if (used + count >= min[0] || cur == 0)
                return;
            dfs(coins, cur - 1, used + count, remain, min);
        }
    }
}