// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

public class AddStrings {
    public String addStrings(String num1, String num2) {
        StringBuilder sb = new StringBuilder();
        int carry = 0;
        int i = num1.length() - 1, j = num2.length() - 1;
        for (; i >= 0 && j >= 0; i--, j--) {
            int d1 = num1.charAt(i) - '0';
            int d2 = num2.charAt(j) - '0';
            sb.append((d1 + d2 + carry) % 10);
            carry = (d1 + d2 + carry) / 10;
        }

        while (i >= 0) {
            int d1 = num1.charAt(i--) - '0';
            sb.append((d1 + carry) % 10);
            carry = (d1 + carry) / 10;
        }

        while (j >= 0) {
            int d2 = num2.charAt(j--) - '0';
            sb.append((d2 + carry) % 10);
            carry = (d2 + carry) / 10;
        }

        if (carry > 0)
            sb.append(carry);

        return sb.reverse().toString();
    }
}