// Design an Iterator class, which has:

// A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
// A function next() that returns the next combination of length combinationLength in lexicographical order.
// A function hasNext() that returns True if and only if there exists a next combination.

// Example:
// CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

// iterator.next(); // returns "ab"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "ac"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "bc"
// iterator.hasNext(); // returns false

import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

class CombinationIterator {
    Stack<Character> stack;
    Map<Character, Integer> cidx;
    String result, str;
    int comLength;

    public CombinationIterator(String characters, int combinationLength) {
        comLength = combinationLength;
        cidx = new HashMap<>();
        str = characters;
        stack = new Stack<>();
        result = "";

        for (Character c : characters.toCharArray()) {
            stack.push(c);
            result = result + c;
            if (stack.size() == combinationLength)
                break;
        }
        int ix = 0;
        for (Character c : characters.toCharArray()) {
            cidx.put(c, ix++);
        }
    }

    public String next() {
        String current = result;
        int idx = str.length() - 1;

        while (!stack.isEmpty() && cidx.get(stack.peek()) == idx) {
            stack.pop();
            idx--;
            result = result.substring(0, result.length() - 1);
        }
        if (stack.isEmpty())
            return current;

        idx = cidx.get(stack.pop());
        result = result.substring(0, result.length() - 1);

        while (stack.size() != comLength) {
            Character temp = str.charAt(++idx);
            result += temp;
            stack.push(temp);
        }

        return current;
    }

    public boolean hasNext() {
        return !stack.isEmpty();
    }
}
/**
 * Your CombinationIterator object will be instantiated and called as such:
 * CombinationIterator obj = new CombinationIterator(characters,
 * combinationLength); String param_1 = obj.next(); boolean param_2 =
 * obj.hasNext();
 */