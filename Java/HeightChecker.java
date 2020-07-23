import java.util.Arrays;

public class HeightChecker {
    public int heightChecker(int[] heights) {
        int counter = 0;
        int[] h = heights.clone();
        Arrays.sort(h);
        for (int i = 0; i < heights.length; i++) {
            if (h[i] != heights[i])
                counter++;
        }
        return counter;
    }
}