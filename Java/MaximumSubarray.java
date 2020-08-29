// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

public class MaximumSubarray {
    public int maxSubArray(int[] nums) {
        int maxSum_end = nums[0];
        int maxSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            maxSum_end = Math.max(maxSum_end + nums[i], nums[i]);
            maxSum = Math.max(maxSum, maxSum_end);
        }
        return maxSum;
    }
}