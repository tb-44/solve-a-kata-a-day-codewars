// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

public class ClimbingStairs {
    public int climbStairs(int n) {
        if (n <= 0) {
            return 0;
        }

        int st = 1, st1 = 1, st2 = 1;

        for (int i = 2; i <= n; i++) {
            st = st1 + st2;
            st2 = st1;
            st1 = st;
        }
        return st;
    }
}

// Another solution
// public int climbStairs(int n) {
// int memo[] = new int[n + 1];
// return climb_Stairs(0, n, memo);
// }

// public int climb_Stairs(int i, int n, int memo[]) {
// if (i > n) {
// return 0;
// }
// if (i == n) {
// return 1;
// }
// if (memo[i] > 0) {
// return memo[i];
// }
// memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
// return memo[i];
// }