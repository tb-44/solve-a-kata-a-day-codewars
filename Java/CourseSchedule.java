// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

import java.util.LinkedList;
import java.util.Queue;

public class CourseSchedule {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        LinkedList<Integer>[] array = new LinkedList[numCourses];
        for (int i = 0; i < numCourses; i++) {
            array[i] = new LinkedList<>();
        }
        int[] degree = new int[numCourses];
        for (int i = 0; i < prerequisites.length; i++) {
            int first = prerequisites[i][0];
            int second = prerequisites[i][1];
            degree[first]++;
            array[second].add(first);
        }

        int count = 0;
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (degree[i] == 0) {
                queue.offer(i);
                count++;
            }
        }

        while (!queue.isEmpty()) {
            int a = queue.poll();
            for (int i = 0; i < array[a].size(); i++) {
                int x = array[a].get(i);
                degree[x]--;
                if (degree[x] == 0) {
                    queue.offer(x);
                    count++;
                }
            }
        }
        if (count != numCourses) {
            return false;
        }
        return true;
    }
}