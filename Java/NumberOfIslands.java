public class NumberOfIslands {
    public int numIslands(char[][] grid) {
        int islands = 0;
        int[] next = new int[] { 0, 0 };

        while (found(grid, next)) {
            bfs(grid, next[0], next[1]);
            islands++;
        }
        return islands;
    }

    private boolean found(char[][] grid, int[] next) {

        for (int i = next[0]; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    next[0] = i;
                    next[1] = j;
                    return true;
                }
            }
        }
        return false;
    }

    private void bfs(char[][] grid, int i, int j) {
        if (grid[i][j] == '1') {
            grid[i][j] = '0';

            if (i - 1 >= 0)
                bfs(grid, i - 1, j);

            if (i + 1 < grid.length)
                bfs(grid, i + 1, j);

            if (j - 1 >= 0)
                bfs(grid, i, j - 1);

            if (j + 1 < grid[0].length)
                bfs(grid, i, j + 1);
        }
    }
}