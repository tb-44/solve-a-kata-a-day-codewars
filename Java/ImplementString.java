// Implement strStr().

// Return the index of the first occurrence of needle in haystack,or-1 if needle is not part of haystack.

// Example 1:

// Input:haystack="hello",needle="ll"Output:2 Example 2:

// Input:haystack="aaaaa",needle="bba"Output:-1 Clarification:

// What should we return when needle is an empty string?This is a great question to ask during an interview.

// For the purpose of this problem,we will return 0 when needle is an empty string.This is consistent to C's strstr() and Java's indexOf().

public class ImplementString {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0) {
            return 0;
        }
        if (haystack.length() == 0 || haystack.length() < needle.length()) {
            return -1;
        }

        int hay = 0, needl = 0;
        while (hay < haystack.length()) {
            if (haystack.charAt(hay) == needle.charAt(needl)) {
                needl++;
                if (needl == needle.length()) {
                    return hay - needl + 1;
                }
            } else {
                hay = hay - needl;
                needl = 0;
            }
            hay++;
        }
        return -1;
    }
}