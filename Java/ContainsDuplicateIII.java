// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
// Example 3:

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false

import java.util.TreeSet;

class ContainsDuplicateIII {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if (k < 1 || t < 0)
            return false;

        TreeSet<Integer> set = new TreeSet<Integer>();
        for (int i = 0; i < nums.length; i++) {
            int c = nums[i];
            if ((set.floor(c) != null && c <= set.floor(c) + t) || (set.ceiling(c) != null && c >= set.ceiling(c) - t))
                return true;

            set.add(c);

            if (i >= k)
                set.remove(nums[i - k]);
        }

        return false;
    }
}