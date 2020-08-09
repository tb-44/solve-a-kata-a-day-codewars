// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Example 1:
// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

import java.util.LinkedList;
import java.util.Queue;

public class RottingOranges {
    public int orangesRotting(int[][] grid) {
        Queue<int[]> q = new LinkedList<>();
        int fresh = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 2)
                    q.add(new int[] { i, j });
                if (grid[i][j] == 1)
                    fresh++;
            }
        }

        int[][] direction = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
        int time = 0;
        while (!q.isEmpty() && fresh > 0) {
            time++;
            int size = q.size();
            while (size-- > 0) {
                int[] xy = q.poll();
                for (int[] d : direction) {
                    int x = xy[0] + d[0];
                    int y = xy[1] + d[1];

                    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == 0 || grid[x][y] == 2)
                        continue;
                    q.add(new int[] { x, y });
                    grid[x][y] = 2;
                    fresh--;
                }
            }
        }

        return fresh == 0 ? time : -1;
    }
}