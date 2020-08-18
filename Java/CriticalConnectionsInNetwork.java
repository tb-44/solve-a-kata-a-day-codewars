// There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.
// A critical connection is a connection that, if removed, will make some server unable to reach some other server.
// Return all critical connections in the network in any order.

// Example 1:
// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CriticalConnectionsInNetwork {
    int T = 1;

    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        if (n == 0 || connections.size() == 0) {
            return new ArrayList<>();
        }

        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            graph.add(new ArrayList<Integer>());
        }
        for (List<Integer> conn : connections) {
            graph.get(conn.get(0)).add(conn.get(1));
            graph.get(conn.get(1)).add(conn.get(0));
        }

        int[] timestamp = new int[n];
        List<List<Integer>> criticalConns = new ArrayList<>();
        dfs(n, graph, timestamp, 0, -1, criticalConns);
        return criticalConns;
    }

    private int dfs(int n, List<List<Integer>> graph, int[] timestamp, int v, int parent,
            List<List<Integer>> criticalConns) {
        if (timestamp[v] != 0) {
            return timestamp[v];
        }
        timestamp[v] = T++;
        int minTimestamp = Integer.MAX_VALUE;
        for (int neighbor : graph.get(v)) {
            if (neighbor == parent)
                continue;
            int neighborTimestamp = dfs(n, graph, timestamp, neighbor, v, criticalConns);
            minTimestamp = Math.min(minTimestamp, neighborTimestamp);
        }

        if (minTimestamp >= timestamp[v]) {
            if (parent >= 0)
                criticalConns.add(Arrays.asList(parent, v));
        }
        return Math.min(timestamp[v], minTimestamp);
    }
}