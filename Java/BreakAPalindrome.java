// Given a palindromic string palindrome, replace exactly one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.
// After doing so, return the final string.  If there is no way to do so, return the empty string.

// Example 1:
// Input: palindrome = "abccba"
// Output: "aaccba"

// Example 2:
// Input: palindrome = "a"
// Output: ""

public class BreakAPalindrome {
    public String breakPalindrome(String palindrome) {
        if (palindrome.length() <= 1) {
            return "";
        }
        char[] chars = palindrome.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != 'a') {
                if (palindrome.length() % 2 != 0 && i == palindrome.length() / 2) {
                    continue;
                }
                chars[i] = 'a';
                break;
            }

            if (i == chars.length - 1) {
                chars[i] = 'b';
            }
        }
        return String.valueOf(chars);
    }
}