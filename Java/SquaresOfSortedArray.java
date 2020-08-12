// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

public class SquaresOfSortedArray {
    public int[] sortedSquares(int[] A) {
        if (A == null)
            return null;
        int[] result = new int[A.length];
        int start = 0, end = A.length - 1;
        int i = end;
        while (start <= end) {
            int a1 = A[start] * A[start];
            int a2 = A[end] * A[end];
            if (a1 > a2) {
                result[i--] = a1;
                start++;
            } else {
                result[i--] = a2;
                end--;
            }
        }
        return result;
    }
}