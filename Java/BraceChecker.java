// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
//It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 
//Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

import java.util.ArrayList;
import java.util.List;

public class BraceChecker {
	public boolean isValid(String braces) {
		if (braces.length() % 2 != 0) {
			return false;
		}

		char[] bracesArray = braces.toCharArray();
		List<Character> bracesList = new ArrayList<>();

		for (char c : bracesArray) {
			bracesList.add(c);
		}

		for (int i = 0; i < bracesList.size() - 1;) {
			if (bracesList.get(i) == '(' && bracesList.get(i + 1) == ')') {
				bracesList.remove(i);
				bracesList.remove(i);
				i = 0;
				continue;
			} else if (bracesList.get(i) == '[' && bracesList.get(i + 1) == ']') {
				bracesList.remove(i);
				bracesList.remove(i);
				i = 0;
				continue;
			} else if (bracesList.get(i) == '{' && bracesList.get(i + 1) == '}') {
				bracesList.remove(i);
				bracesList.remove(i);
				i = 0;
				continue;
			}

			i++;
		}

		return (bracesList.isEmpty()) ? true : false;
	}
}