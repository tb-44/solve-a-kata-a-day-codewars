// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

import java.util.ArrayList;
import java.util.List;

public class SpiralMatrix {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix == null || matrix.length == 0)
            return result;
        int left = 0, right = matrix.length - 1;
        int top = 0, bottom = matrix[0].length - 1;

        while (left <= right && top <= bottom) {
            for (int c = top; c <= bottom; c++)
                result.add(matrix[left][c]);
            for (int r = left + 1; r <= right; r++)
                result.add(matrix[r][bottom]);
            if (left < right && top < bottom) {
                for (int c = bottom - 1; c > top; c--)
                    result.add(matrix[right][c]);
                for (int r = right; r > left; r--)
                    result.add(matrix[r][top]);
            }
            left++;
            right--;
            top++;
            bottom--;
        }
        return result;
    }
}