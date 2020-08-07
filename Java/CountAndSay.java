// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: 4
// Output: "1211"
// Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which

public class CountAndSay {
    public String countAndSay(int n) {
        if (n <= 1) {
            return n + "";
        }

        String str = "11";
        int s = 2;
        while (s < n) {
            StringBuffer sb = new StringBuffer();
            char[] c = str.toCharArray();
            int count = 1;
            int t = Character.getNumericValue(c[0]);
            for (int i = 1; i < c.length; i++) {
                if (c[i] == c[i - 1]) {
                    count++;
                } else {
                    sb.append(count + "" + t);
                    t = Character.getNumericValue(c[i]);
                    count = 1;
                }
            }
            s++;
            sb.append(count + "" + t);
            str = sb.toString();
        }
        return str;
    }
}