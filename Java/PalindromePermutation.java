// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false

// Example 2:

// Input: "aab"
// Output: true

// Example 3:

// Input: "carerac"
// Output: true

import java.util.HashSet;
import java.util.Set;

public class PalindromePermutation {
    public boolean canPermutePalindrome(String s) {
        Set<Character> left = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            if (left.contains(s.charAt(i))) {
                left.remove(s.charAt(i));
            } else {
                left.add(s.charAt(i));
            }
        }
        return left.size() < 2;
    }
}