// You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.
// paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.
// Also, there is no garden that has more than 3 paths coming into or leaving it.
// Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
// Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

// Example 1:
// Input: N = 3, paths = [[1,2],[2,3],[3,1]]
// Output: [1,2,3]

// Example 2:
// Input: N = 4, paths = [[1,2],[3,4]]
// Output: [1,2,1,2]

// Example 3:
// Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
// Output: [1,2,3,4]

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class FlowerPlantingWithAdjacent {
    public int[] gardenNoAdj(int N, int[][] paths) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        for (int i = 0; i < N; i++) {
            graph.put(i, new HashSet<Integer>());
        }

        for (int[] path : paths) {
            int x = path[0] - 1;
            int y = path[1] - 1;
            graph.get(x).add(y);
            graph.get(y).add(x);
        }

        int[] result = new int[N];
        for (int i = 0; i < N; i++) {
            int[] color = new int[5];
            for (int n : graph.get(i)) {
                color[result[n]] = 1;
            }

            for (int c = 4; c >= 1; c--) {
                if (color[c] != 1) {
                    result[i] = c;
                }
            }
        }
        return result;
    }
}