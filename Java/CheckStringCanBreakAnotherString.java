import java.util.Arrays;

// Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa (in other words s2 can break s1).
// A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

// Example 1:
// Input: s1 = "abc", s2 = "xya"
// Output: true
// Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".

// Example 2:
// Input: s1 = "abe", s2 = "acd"
// Output: false 
// Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

// Example 3:
// Input: s1 = "leetcodee", s2 = "interview"
// Output: true

// Constraints:
// s1.length == n
// s2.length == n
// 1 <= n <= 10^5
// All strings consist of lowercase English letters.

public class CheckStringCanBreakAnotherString {
    public boolean checkIfCanBreak(String s1, String s2) {
        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();

        Arrays.sort(c1);
        Arrays.sort(c2);

        boolean result1 = true;
        boolean result2 = true;
        for (int i = 0; i < s1.length() && (result1 || result2); i++) {
            if (c1[i] < c2[i])
                result1 = false;
            if (c2[i] < c1[i])
                result2 = false;
        }
        return result1 || result2;
    }
}

// class Solution {
// public boolean checkIfCanBreak(String s1, String s2) {
// char[] c1 = s1.toCharArray();
// char[] c2 = s2.toCharArray();
// Arrays.sort(c1);
// Arrays.sort(c2);
// int count = 0;
// while (count < c1.length && c1[count] - c2[count] >= 0) {
// count++;
// }
// if (count == c1.length) {
// return true;
// }
// count = 0;
// while (count < c2.length && c2[count] - c1[count] >= 0) {
// count++;
// }
// if (count == c2.length) {
// return true;
// }
// return false;
// }
// }