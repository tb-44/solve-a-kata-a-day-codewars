// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.

// Note:
// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Example 1:
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Example 2:
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class WordLadder {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> setBegin = new HashSet<>();
        Set<String> setEnd = new HashSet<>();
        Set<String> setDict = new HashSet<>();

        int N = beginWord.length();
        setBegin.add(beginWord);
        setEnd.add(endWord);
        setDict.addAll(wordList);

        if (!setDict.contains(endWord))
            return 0;

        return bfs(setBegin, setEnd, setDict, N, 1);
    }

    private int bfs(Set<String> setBegin, Set<String> setEnd, Set<String> setDict, int N, int count) {
        if (setBegin.isEmpty() || setEnd.isEmpty())
            return 0;
        count++;
        setDict.removeAll(setBegin);
        Set<String> setNext = new HashSet<>();
        for (String prevWord : setBegin) {
            char[] chars = prevWord.toCharArray();
            for (int i = 0; i < chars.length; i++) {
                char c = chars[i];
                for (char j = 'a'; j <= 'z'; j++) {
                    if (chars[i] == j)
                        continue;

                    chars[i] = j;
                    String nextWord = new String(chars);
                    if (setEnd.contains(nextWord)) {
                        return count;
                    }
                    if (setDict.contains(nextWord)) {
                        setNext.add(nextWord);
                    }
                    chars[i] = c;
                }
            }
        }

        if (setNext.size() > setEnd.size()) {
            return bfs(setEnd, setNext, setDict, N, count);
        }
        return bfs(setNext, setEnd, setDict, N, count);
    }
}