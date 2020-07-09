// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// Kata.expandedForm(12); # Should return "10 + 2"
// Kata.expandedForm(42); # Should return "40 + 2"
// Kata.expandedForm(70304); # Should return "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!
public class ExpandedForm {

    public static String expandedForm(int num) {
        return expandedForm(num, 0, 10);
    }

    public static String expandedForm(int num, int mod, int exp) {
        if (num == 0)
            return "";
        mod = num % exp;
        return expandedForm(num - mod, mod, exp * 10) + ((mod > 0) ? ((exp < num) ? " + " : "") + mod : "");
    }

}