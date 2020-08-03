// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

public class ValidPalindrome {
    public boolean isPalindrome(String s) {
        if (s == null || s.length() == 0) {
            return true;
        }

        int beginning = 0, end = s.length() - 1;

        while (beginning < end) {
            while (beginning < end && !Character.isLetterOrDigit(s.charAt(beginning))) {
                beginning++;
            }

            while (beginning < end && !Character.isLetterOrDigit(s.charAt(end))) {
                end--;
            }

            char ch1 = Character.toLowerCase(s.charAt(beginning));
            char ch2 = Character.toLowerCase(s.charAt(end));

            if (ch1 != ch2) {
                return false;
            }

            beginning++;
            end--;
        }

        return true;
    }
}