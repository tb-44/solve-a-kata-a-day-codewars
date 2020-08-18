// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

public class ValidPalindromeII {
    public boolean validPalindrome(String s) {
        return validPalindrome(s, 0, s.length() - 1, false);
    }

    private boolean validPalindrome(String s, int left, int right, boolean delete) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                if (delete) {
                    return false;
                }
                return validPalindrome(s, left + 1, right, true) || validPalindrome(s, left, right - 1, true);
            }
            left++;
            right--;
        }
        return true;
    }
}