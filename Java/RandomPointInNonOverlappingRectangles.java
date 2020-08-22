// Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.

// Note:
// An integer point is a point that has integer coordinates. 
// A point on the perimeter of a rectangle is included in the space covered by the rectangles. 
// ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer coordinates of the bottom-left corner, and [x2, y2] are the integer coordinates of the top-right corner.
// length and width of each rectangle does not exceed 2000.
// 1 <= rects.length <= 100
// pick return a point as an array of integer coordinates [p_x, p_y]
// pick is called at most 10000 times.

// Example 1:
// Input: 
// ["Solution","pick","pick","pick"]
// [[[[1,1,5,5]]],[],[],[]]
// Output: 
// [null,[4,1],[4,1],[3,3]]

// Example 2:
// Input: 
// ["Solution","pick","pick","pick","pick","pick"]
// [[[[-2,-2,-1,-1],[1,0,3,0]]],[],[],[],[],[]]
// Output: 
// [null,[-1,-2],[2,0],[-2,-1],[3,0],[-2,-2]]
// Explanation of Input Syntax:

// The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array of rectangles rects. pick has no arguments. Arguments are always wrapped with a list, even if there aren't any.

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class RandomPointInNonOverlappingRectangles {

    private List<Integer> rec;
    private int[][] rects;
    private Random rand = new Random();
    private int total;

    public RandomPointInNonOverlappingRectangles(int[][] rects) {

        this.rects = rects;
        rec = new ArrayList<>();
        total = 0;
        for (int[] r : rects) {
            total += (r[3] - r[1] + 1) * (r[2] - r[0] + 1);
            rec.add(total);
        }
    }

    public int[] pick() {
        int next = rand.nextInt(total);
        int index = findRect(next);

        int hi = rects[index][3] - rects[index][1] + 1;
        int mid = rects[index][2] - rects[index][0] + 1;
        int lo = rec.get(index) - mid * hi;
        int order = next - lo;

        int[] rt = new int[2];
        rt[0] = rects[index][0] + order / hi;
        rt[1] = rects[index][1] + order % hi;

        return rt;
    }

    private int findRect(int p) {
        int left = 0, right = rects.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (p < rec.get(mid) && (mid == 0 || p >= rec.get(mid - 1))) {
                return mid;
            } else if (p >= rec.get(mid)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
/**
 * Your Solution object will be instantiated and called as such: Solution obj =
 * new Solution(rects); int[] param_1 = obj.pick();
 */