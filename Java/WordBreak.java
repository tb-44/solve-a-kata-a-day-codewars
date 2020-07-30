// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// Example 2:

// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []

public class WordBreak {
    HashMap<String, LinkedList<String>> m = new HashMap<String, LinkedList<String>>();
    public List<String> wordBreak(String s, List<String> wordDict) {
        if (m.containsKey(s))
		return m.get(s);

	    LinkedList<String> list = new LinkedList<String>();
	        if (s.length() == 0) {
		        list.add("");
		    return list;
	        }
        
	    for (String wd : wordDict) {
		    if (s.startsWith(wd)) {
			    List<String> sublist = wordBreak(s.substring(wd.length()), wordDict);
			        for (String sub : sublist)
				        list.add(wd + (sub.isEmpty() ? "" : " ") + sub);
		    }
	    }
	    m.put(s, list);
	    return list;
    }
}