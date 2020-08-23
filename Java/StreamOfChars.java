// Implement the StreamChecker
// class as follows:

// StreamChecker(words): Constructor, init the data structure with the given words.
// query(letter): returns true if and only if for some k >= 1, the last k characters

// queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.

// Example:
// StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // init the dictionary.
// streamChecker.query('a');          // return false
// streamChecker.query('b');          // return false
// streamChecker.query('c');          // return false
// streamChecker.query('d');          // return true, because 'cd' is in the wordlist
// streamChecker.query('e');          // return false
// streamChecker.query('f');          // return true, because 'f' is in the wordlist
// streamChecker.query('g');          // return false
// streamChecker.query('h');          // return false
// streamChecker.query('i');          // return false
// streamChecker.query('j');          // return false
// streamChecker.query('k');          // return false
// streamChecker.query('l');          // return true, because 'kl' is in the wordlist

// Note:

// 1 <= words.length <= 2000
// 1 <= words[i].length <= 2000
// Words will only consist of lowercase English letters.
// Queries will only consist of lowercase English letters.
// The number of queries is at most 40000.

public class StreamOfChars {
    class Node {
        Node[] child;
        boolean end;

        public Node() {
            child = new Node[26];
            end = false;
        }
    }

    Node root;
    StringBuilder sb;

    public StreamOfChars(String[] words) {
        root = new Node();
        sb = new StringBuilder();
        for (String word : words) {
            insert(word);
        }
    }

    public boolean query(char letter) {
        sb.append(letter);
        Node current = root;
        for (int i = sb.length() - 1; i >= 0; i--) {
            char ch = sb.charAt(i);
            if (current.child[ch - 'a'] == null) {
                return false;
            }
            current = current.child[ch - 'a'];
            if (current.end)
                return true;
        }
        return false;
    }

    private void insert(String word) {
        Node current = root;
        for (int i = word.length() - 1; i >= 0; i--) {
            char ch = word.charAt(i);
            Node next = current.child[ch - 'a'];
            if (next == null) {
                current.child[ch - 'a'] = next = new Node();
            }
            current = next;
        }
        current.end = true;
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * StreamChecker obj = new StreamChecker(words); boolean param_1 =
 * obj.query(letter);
 */