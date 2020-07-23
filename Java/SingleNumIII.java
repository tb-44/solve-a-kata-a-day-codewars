// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// Example:

// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:

// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

public class SingleNumIII {
    public int[] singleNumber(int[] nums) {
        if (nums == null || nums.length == 0) {
            return nums;
        }

        int xor = 0, a = 0, b = 0;
        for (int num : nums) {
            xor ^= num;
        }

        int m = 1;
        while ((m & xor) == 0) {
            m = m << 1;
        }

        for (int num : nums) {
            if ((num & m) == 0) {
                a ^= num;
            } else {
                b ^= num;
            }
        }

        int[] numbers = new int[] { a, b };
        return numbers;
    }
}