// Given an array of 4 digits, return the largest 24 hour time that can be made.
// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

// Example 1:
// Input: [1,2,3,4]
// Output: "23:41"

// Example 2:
// Input: [5,5,5,5]
// Output: ""

public class LargestTimeForGivenDigits {
    private int[] result;

    public String largestTimeFromDigits(int[] nums) {
        permutate(nums, 0);
        return format(result);
    }

    private void permutate(int[] nums, int offset) {
        if (offset == nums.length - 1) {
            if (isValid(nums) && isBetter(result, nums)) {
                if (result == null) {
                    result = new int[4];
                }
                for (int i = 0; i < 4; i++) {
                    result[i] = nums[i];
                }
            }
            return;
        }

        for (int i = offset; i < nums.length; i++) {
            int tmp = nums[offset];
            nums[offset] = nums[i];
            nums[i] = tmp;
            permutate(nums, offset + 1);
            nums[i] = nums[offset];
            nums[offset] = tmp;
        }

    }

    private boolean isValid(int[] nums) {
        return nums[0] <= 2 && (nums[0] == 2 ? nums[1] <= 3 : true) && nums[2] <= 5;

    }

    private boolean isBetter(int[] result, int[] nums) {
        if (result == null) {
            return true;
        }
        for (int i = 0; i < 3; i++) {
            if (result[i] == nums[i]) {
                continue;
            }
            if (result[i] < nums[i]) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    private String format(int[] nums) {
        if (nums == null) {
            return "";
        } else {
            return new StringBuilder().append(nums[0]).append(nums[1]).append(':').append(nums[2]).append(nums[3])
                    .toString();
        }
    }
}