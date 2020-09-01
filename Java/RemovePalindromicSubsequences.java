class RemovePalindromicSubsequences {
    public int removePalindromeSub(String s) {
        if (s.isEmpty() || s == null || s.length() < 1) {
            return 0;
        }

        if (isPalindrome(s)) {
            return 1;
        }
        return 2;
    }

    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
}