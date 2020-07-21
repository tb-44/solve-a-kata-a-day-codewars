// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically(not diagonally).The grid is completely surrounded by water,and there is exactly one island(i.e.,one or more connected land cells).

// The island doesn'thave"lakes"(water inside that isn'tconnected to the water around the island).One cell is a square with side length 1. The grid is rectangular,width and height don'texceed 100. Determine the perimeter of the island.

// Example:

// Input:[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

// Output:16

// Explanation:The perimeter is the 16 yellow stripes in the image below:

public class IslandPerimeter {
    public int islandPerimeter(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0 || grid == null)
            return 0;

        int perim = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1) {
                    perim += 4;

                    if (i > 0 && grid[i - 1][j] == 1) {
                        perim -= 2;
                    }
                    if (j > 0 && grid[i][j - 1] == 1) {
                        perim -= 2;
                    }
                }
            }
        }
        return perim;
    }
}