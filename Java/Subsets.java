// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

import java.util.ArrayList;
import java.util.Arrays;

public class Subsets {
    public ArrayList<ArrayList<Integer>> subsets(int[] nums) {
        if (nums == null)
            return null;

        Arrays.sort(nums);
        ArrayList<ArrayList<Integer>> subsets = new ArrayList<ArrayList<Integer>>();

        for (int i = 0; i < nums.length; i++) {
            ArrayList<ArrayList<Integer>> b = new ArrayList<ArrayList<Integer>>();

            for (ArrayList<Integer> list : subsets) {
                list.addAll(new ArrayList<Integer>());
            }

            for (ArrayList<Integer> list2 : b) {
                list2.add(nums[i]);
            }

            ArrayList<Integer> s = new ArrayList<Integer>();
            s.add(nums[i]);
            b.add(s);

            subsets.addAll(b);
        }

        subsets.add(new ArrayList<Integer>());
        return subsets;
    }
}