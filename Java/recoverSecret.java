// There is a secret string which is unknown to you. 
//Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs 
//somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the 
//secret string.

// You can assume nothing about the triplets given to you other than that they are 
//valid triplets and that they contain sufficient information to deduce the original string. 
//In particular, this means that the secret string will never contain letters that 
//do not occur in one of the triplets given to you.

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class SecretDetective {

    public String recoverSecret(char[][] triplets) {

        Set<Character> chars = getAllChars(triplets);
        return recursivelyBuildString(new StringBuilder(chars.size()), triplets, chars).toString();
    }

    private StringBuilder recursivelyBuildString(StringBuilder sb, char[][] triplets, Set<Character> charsRemain) {

        if (charsRemain.size() == 0) {
            return sb;
        }

        for (Iterator<Character> iterator = charsRemain.iterator(); iterator.hasNext();) {
            Character ch = iterator.next();
            if (isNext(ch, triplets, charsRemain)) {
                sb.append(ch);
                iterator.remove();
            }
        }
        return recursivelyBuildString(sb, triplets, charsRemain);
    }

    private boolean isNext(char ch, char[][] triplets, Set<Character> charsRemain) {

        for (char[] triplet : triplets) {
            for (int i = 1; i < triplet.length; i++) {
                if (triplet[i] == ch && charsRemain.contains(triplet[i - 1])) {
                    return false;
                }
            }
        }
        return true;
    }

    private Set<Character> getAllChars(char[][] triplets) {

        Set<Character> allChars = new HashSet<>();
        for (char[] triplet : triplets) {
            for (char ch : triplet) {
                allChars.add(ch);
            }
        }
        return allChars;
    }
}