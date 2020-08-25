// In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.
// Train tickets are sold in 3 different ways:

// a 1-day pass is sold for costs[0] dollars;
// a 7-day pass is sold for costs[1] dollars;
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

// Return the minimum number of dollars you need to travel every day in the given list of days.

// Example 1:

// Input: days = [1,4,6,7,8,20], costs = [2,7,15]
// Output: 11
// Explanation: 
// For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
// On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
// On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
// In total you spent $11 and covered all the days of your travel.
// Example 2:

// Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
// Output: 17
// Explanation: 
// For example, here is one way to buy passes that lets you travel your travel plan:
// On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
// On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
// In total you spent $17 and covered all the days of your travel.

public class MinCostForTickets {
    int[] days, costs;
    Integer[] memo;
    int[] durations = new int[] { 1, 7, 30 };

    public int mincostTickets(int[] days, int[] costs) {
        this.days = days;
        this.costs = costs;
        memo = new Integer[days.length];

        return dp(0);
    }

    public int dp(int i) {
        if (i >= days.length)
            return 0;
        if (memo[i] != null)
            return memo[i];

        int result = Integer.MAX_VALUE;
        int j = i;
        for (int k = 0; k < 3; ++k) {
            while (j < days.length && days[j] < days[i] + durations[k])
                j++;
            result = Math.min(result, dp(j) + costs[k]);
        }

        memo[i] = result;
        return result;
    }
}

// class Solution {
// int[] costs;
// Integer[] memo;
// Set<Integer> dayset;

// public int mincostTickets(int[] days, int[] costs) {
// this.costs = costs;
// memo = new Integer[366];
// dayset = new HashSet();

// for (int d : days)
// dayset.add(d);
// return dp(1);
// }

// public int dp(int i) {
// if (i > 365)
// return 0;
// if (memo[i] != null)
// return memo[i];

// int result;
// if (dayset.contains(i)) {
// result = Math.min(dp(i + 1) + costs[0], dp(i + 7) + costs[1]);
// result = Math.min(result, dp(i + 30) + costs[2]);
// } else {
// result = dp(i + 1);
// }

// memo[i] = result;
// return result;
// }
// }

// dynamic programming formula:
// dp(i)=min(dp(i+1)+costs[0],dp(i+7)+costs[1],dp(i+30)+costs[2])

// Time Complexity:
// O(W), where W = 365W = 365 is the maximum numbered day in your travel
// plan.
// Space Complexity: O(W).

// class Solution {
// public int mincostTickets(int[] days, int[] costs) {
// boolean[] dayIncluded = new boolean[366];
// for (int day : days) {
// dayIncluded[day] = true;
// }
// int[] minCost = new int[366];
// minCost[0] = 0;
// for (int day = 1; day <= 365; ++day) {
// if (!dayIncluded[day]) {
// minCost[day] = minCost[day - 1];
// continue;
// }
// int min;
// min = minCost[day - 1] + costs[0];
// min = Math.min(min, minCost[Math.max(0, day - 7)] + costs[1]);
// min = Math.min(min, minCost[Math.max(0, day - 30)] + costs[2]);
// minCost[day] = min;
// }

// return minCost[365];
// }
// }