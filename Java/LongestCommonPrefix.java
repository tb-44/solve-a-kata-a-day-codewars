// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
// All given inputs are in lowercase letters a-z.

public class LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        String lcp = strs[0];
        for (int i = 1; i < strs.length; i++) {
            int j = 0;
            String cs = strs[i];

            while (j < lcp.length() && j < cs.length() && lcp.charAt(j) == cs.charAt(j)) {
                j++;
            }

            if (j == 0) {
                return "";
            }

            lcp = lcp.substring(0, j);
        }

        return lcp;
    }
}