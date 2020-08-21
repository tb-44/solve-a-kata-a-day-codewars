// Given an array of string words.Return all strings in words which is substring of another word in any order.
// String words[i]is substring of words[j],if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:
// Input:words=["mass","as","hero","superhero"]Output:["as","hero"]Explanation:"as"is substring of"mass"and"hero"is substring of"superhero".["hero","as"]is also a valid answer.

import java.util.ArrayList;
import java.util.List;

public class StringMatchInArr {
    public List<String> stringMatching(String[] words) {
        List<String> result = new ArrayList<String>();
        for (String s : words) {
            for (int i = 0; i < words.length; i++) {
                if (words[i].contains(s) && words[i] != s) {
                    result.add(s);
                    break;
                }
            }
        }
        return result;
    }
}