// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Example:
// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:  

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

public class UglyNumber {
    public int nthUglyNumber(int n) {
        if (n <= 0) {
            return 0;
        }

        int[] uList = new int[n];
        uList[0] = 1;
        int l1 = 0, l2 = 0, l3 = 0;

        for (int i = 1; i < n; i++) {
            if (uList[l1] * 2 <= uList[i - 1]) {
                l1++;
            }
            if (uList[l2] * 3 <= uList[i - 1]) {
                l2++;
            }
            if (uList[l3] * 5 <= uList[i - 1]) {
                l3++;
            }

            uList[i] = Math.min(uList[l1] * 2, Math.min(uList[l2] * 3, uList[l3] * 5));
        }
        return uList[n - 1];
    }
}