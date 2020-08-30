// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,the"Pacific ocean"touches the left and top edges of the matrix and the"Atlantic ocean"touches the right and bottom edges.
// Water can only flow in four directions(up,down,left,or right)from a cell to another one with height equal or lower.
// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:
// The order of returned grid coordinates does not matter.Both m and n are less than 150.

// Example:
// Given the following 5 x5 matrix:
// Pacific~~~~~~1 2 2 3(5)*~3 2 3(4)(4)*~2 4(5)3 1*~(6)(7)1 4 5*~(5)1 1 2 4******Atlantic
// Return:
// [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]](positions with parentheses in above matrix).

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PacificAtlanticWaterFlow {
    public List<List<Integer>> pacificAtlantic(int[][] matrix) {
        List<List<Integer>> res = new ArrayList<>();

        if (matrix == null || matrix.length == 0)
            return res;

        int nr = matrix.length;
        int nc = matrix[0].length;

        boolean[][] pacific = new boolean[nr][nc];
        boolean[][] atlantic = new boolean[nr][nc];

        for (int c = 0; c < nc; c++) {
            dfs(matrix, pacific, 0, c, matrix[0][c]);
            dfs(matrix, atlantic, nr - 1, c, matrix[nr - 1][c]);
        }

        for (int r = 0; r < nr; r++) {
            dfs(matrix, pacific, r, 0, matrix[r][0]);
            dfs(matrix, atlantic, r, nc - 1, matrix[r][nc - 1]);
        }

        for (int r = 0; r < nr; r++) {
            for (int c = 0; c < nc; c++) {
                if (pacific[r][c] && atlantic[r][c])
                    res.add(Arrays.asList(r, c));
            }
        }
        return res;
    }

    public void dfs(int[][] A, boolean[][] flow, int r, int c, int height) {
        int nr = A.length;
        int nc = A[0].length;

        if (r < 0 || r >= nr || c < 0 || c >= nc || flow[r][c] || A[r][c] < height)
            return;

        flow[r][c] = true;

        dfs(A, flow, r + 1, c, A[r][c]);
        dfs(A, flow, r - 1, c, A[r][c]);
        dfs(A, flow, r, c + 1, A[r][c]);
        dfs(A, flow, r, c - 1, A[r][c]);
    }
}