// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:
// Input:
// "abccccdd"
// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

public class LongestPalindrome {
    public int longestPalindrome(String s) {
        int[] counter = new int[Math.abs('A' - 'z') + 1];
        int result = 0;
        for (int i = 0; i < s.length(); i++)
            counter[s.charAt(i) - 'A']++;
        for (int c : counter)
            result += c / 2;
        return Math.min(result * 2 + 1, s.length());
    }
}