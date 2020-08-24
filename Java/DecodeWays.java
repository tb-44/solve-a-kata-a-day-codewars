// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

public class DecodeWays {
    public int numDecodings(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        int[] result = new int[s.length() + 1];
        int n = s.length();
        result[n] = 1;
        result[n - 1] = s.charAt(n - 1) > '0' ? 1 : 0;
        for (int i = n - 2; i >= 0; i--) {
            if (s.charAt(i) == '0') {
                result[i] = 0;
            } else {
                int temp = (s.charAt(i) - '0') * 10 + (s.charAt(i + 1) - '0');
                if (temp > 26) {
                    result[i] = result[i + 1];
                } else {
                    result[i] = result[i + 1] + result[i + 2];
                }
            }
        }
        return result[0];
    }
}