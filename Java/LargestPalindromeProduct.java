// Find the largest palindrome made from the product of two n-digit numbers.
// Since the result could be very large,you should return the largest palindrome mod 1337.

// Example:
// Input:2
// Output:987
// Explanation:99 x 91=9009,9009%1337=987

public class LargestPalindromeProduct {
    public int largestPalindrome(int n) {
        long max = (long) Math.pow(10, n) - 1;
        long min = max / 10;
        for (long left = max; left > min; left--) {
            long right = Long.parseLong(new StringBuilder("" + left).reverse().toString());
            long target = left * (max + 1) + right;
            for (long i = max; i * i >= target; i--) {
                if (target % i == 0) {
                    return (int) (target % 1337);
                }
            }
        }
        return 9;
    }
}