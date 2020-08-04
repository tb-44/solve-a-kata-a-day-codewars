// Given two arrays,write a function to compute their intersection.

// Example 1:
// Input:nums1=[1,2,2,1],nums2=[2,2]Output:[2,2]Example 2:

// Input:nums1=[4,9,5],nums2=[9,4,9,8,4]Output:[4,9]Note:

// Each element in the result should appear as many times as it shows in both arrays.The result can be in any order.Follow up:

// What if the given array is already sorted?How would you optimize your algorithm?What if nums1'ssize is small compared to nums2'ssize?Which algorithm is better?What if elements of nums2 are stored on disk,and the memory is limited such that you cannot load all elements into the memory at once?

import java.util.ArrayList;
import java.util.Arrays;

public class IntersectArrayII {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        ArrayList<Integer> intersect = new ArrayList<Integer>();
        int p1 = 0, p2 = 0;
        while (p1 < nums1.length && p2 < nums2.length) {
            if (nums1[p1] < nums2[p2]) {
                p1++;
            } else if (nums1[p1] > nums2[p2]) {
                p2++;
            } else {
                intersect.add(nums1[p1]);
                p1++;
                p2++;
            }
        }

        int[] result = new int[intersect.size()];
        int i = 0;
        while (i < intersect.size()) {
            result[i] = intersect.get(i);
            i++;
        }
        return result;
    }
}