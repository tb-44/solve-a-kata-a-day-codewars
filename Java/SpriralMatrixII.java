// Given a positive integer n,generate a square matrix filled with elements from 1 to n2 in spiral order.

// Example:
// Input:3 Output:[[1,2,3],[8,9,4],[7,6,5]]

public class SpriralMatrixII {
    public int[][] generateMatrix(int n) {
        int[][] result = new int[n][n];
        if (n == 0) {
            return result;
        }
        if (n == 1) {
            result[0][0] = 1;
            return result;
        }

        int left = 0;
        int right = n - 1;
        int top = 0;
        int bottom = n - 1;
        int val = 1;

        while (left < n && top < n) {
            for (int i = left; i <= right; i++) {
                result[top][i] = val++;
            }
            top++;

            for (int i = top; i <= bottom; i++) {
                result[i][right] = val++;
            }
            right--;

            for (int i = right; i >= left; i--) {
                result[bottom][i] = val++;
            }
            bottom--;

            for (int i = bottom; i >= top; i--) {
                result[i][left] = val++;
            }
            left++;
        }
        return result;
    }
}