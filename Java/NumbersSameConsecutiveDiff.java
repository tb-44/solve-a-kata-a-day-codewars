// Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
// Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
// You may return the answer in any order.

// Example 1:
// Input: N = 3, K = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.

// Example 2:
// Input: N = 2, K = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

import java.util.ArrayList;
import java.util.List;

public class NumbersSameConsecutiveDiff {
    public int[] numsSameConsecDiff(int N, int K) {
        List<Integer> result = new ArrayList<Integer>();
        for (int i = 1; i < 10; i++)
            helper(i, K, N, result);

        if (N == 1)
            result.add(0);
        int[] ans = new int[result.size()];
        for (int i = 0; i < result.size(); i++)
            ans[i] = result.get(i);
        return ans;
    }

    private void helper(int num, int K, int N, List<Integer> result) {
        if (N == 1)
            result.add(num);
        else {
            int n = num % 10;
            if (n + K < 10)
                helper(num * 10 + n + K, K, N - 1, result);
            if (K > 0 && n - K >= 0)
                helper(num * 10 + n - K, K, N - 1, result);
        }
    }
}

// ANOTHER SOLUTION
// class Solution {

// public int[] numsSameConsecDiff(int N, int K) {

// if (N == 1)
// return new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

// List<Integer> queue = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
// for (int level = 1; level < N; ++level) {
// ArrayList<Integer> nextQueue = new ArrayList<>();
// // iterate through each number within the level
// for (Integer num : queue) {
// Integer tailDigit = num % 10;

// ArrayList<Integer> nextDigits = new ArrayList<>();
// nextDigits.add(tailDigit + K);
// if (K != 0)
// nextDigits.add(tailDigit - K);
// for (Integer nextDigit : nextDigits) {
// if (0 <= nextDigit && nextDigit < 10) {
// Integer newNum = num * 10 + nextDigit;
// nextQueue.add(newNum);
// }
// }
// }
// // prepare for the next level
// queue = nextQueue;
// }

// return queue.stream().mapToInt(i -> i).toArray();
// }
// }
