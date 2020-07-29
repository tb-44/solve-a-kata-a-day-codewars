// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:

// Input: [1,2,3,0,2]
// Output: 3 
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

public class BestTimeBuySellStock {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length < 2) {
            return 0;
        }

        int pHold = -prices[0];
        int pSold = 0, pRest = 0;

        for (int i = 1; i < prices.length; i++) {
            int currH = Math.max(pRest - prices[i], pHold);
            int currS = pHold + prices[i];
            int currR = Math.max(pRest, pSold);

            pHold = currH;
            pSold = currS;
            pRest = currR;
        }

        return Math.max(pSold, pRest);
    }
}