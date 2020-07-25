// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

import java.util.Stack;

public class LargestRectangleHist {
    public int largestRectangleArea(int[] heights) {
        int max = 0;
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);

        int i = 0;
        while (i < heights.length) {
            while (stack.peek() != -1 && heights[stack.peek()] > heights[i]) {
                max = Math.max(max, heights[stack.pop()] * (i - stack.peek() - 1));
            }
            stack.push(i++);
        }
        while (stack.peek() != -1) {
            max = Math.max(max, heights[stack.pop()] * (heights.length - stack.peek() - 1));
        }
        return max;
    }
}