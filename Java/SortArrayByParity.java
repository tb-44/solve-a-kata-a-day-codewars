// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

public class SortArrayByParity {
    public int[] sortArrayByParity(int[] A) {
        if (A.length == 1)
            return A;
        int start = 0, end = A.length - 1;

        while (start <= end) {
            if (A[start] % 2 != 0) {
                int temp = A[start];
                A[start] = A[end];
                A[end--] = temp;

            } else
                start++;
        }
        return A;
    }

}

// ALTERNATE SOLUTION
// public int[] sortArrayByParity(int[] A) {
// Integer[] B = new Integer[A.length];
// for (int t = 0; t < A.length; ++t)
// B[t] = A[t];

// Arrays.sort(B, (a, b) -> Integer.compare(a%2, b%2));

// for (int t = 0; t < A.length; ++t)
// A[t] = B[t];
// return A;
// }