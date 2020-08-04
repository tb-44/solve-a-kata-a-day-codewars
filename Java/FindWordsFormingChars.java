// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.
// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Note:
// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

public class FindWordsFormingChars {
    public int countCharacters(String[] words, String chars) {
        int wd = 'z' - 'a' + 1;

        int[] wc = new int[wd];
        for (char c : chars.toCharArray()) {
            wc[c - 'a']++;
        }
        int result = 0;
        for (String word : words) {
            int ct = 0;
            int[] cd = new int[wd];
            for (char c : word.toCharArray()) {
                int i = c - 'a';
                cd[i]++;
                if (cd[i] > wc[i]) {
                    ct = 0;
                    break;
                }
                ct++;
            }
            result += ct;
        }
        return result;
    }
}