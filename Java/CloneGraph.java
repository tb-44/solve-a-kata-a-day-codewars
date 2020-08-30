// Given a reference of a node in a connected undirected graph.
// Return a deep copy(clone)of the graph.
// Each node in the graph contains a val(int)and a list(List[Node])of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity sake,each node's
// value is
// the same
// as the node's

// index (1-indexed). For example, the first node with val = 1, the second node with val = 2, and so on. The graph is represented in the test case using an adjacency list.
// Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.Stack;

// Definition for a Node.
class CloneGraph {
    public int val;
    public List<CloneGraph> neighbors;
    
    public CloneGraph() {
        val = 0;
        neighbors = new ArrayList<CloneGraph>();
    }
    
    public CloneGraph(int _val) {
        val = _val;
        neighbors = new ArrayList<CloneGraph>();
    }
    
    public CloneGraph(int _val, ArrayList<CloneGraph> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }

    public CloneGraph cloneGraph(CloneGraph node) {
        if (node == null)
            return null;
        Set<CloneGraph> seen = new HashSet<>();
        Stack<CloneGraph> stk = new Stack<>();
        Map<CloneGraph, CloneGraph> mapper = new HashMap<>();
        seen.add(node);
        stk.push(node);
        mapper.put(node, new CloneGraph(node.val));
        while (!stk.isEmpty()) {
            CloneGraph n = stk.peek();
            boolean isLeaf = true;
            for (CloneGraph nei : n.neighbors) {
                if (!seen.contains(nei)) {
                    seen.add(nei);
                    stk.push(nei);
                    mapper.put(nei, new CloneGraph(nei.val));
                    isLeaf = false;
                }
            }
            if (isLeaf) {
                CloneGraph poped = stk.pop();
                for (CloneGraph nei : poped.neighbors) {
                    mapper.get(poped).neighbors.add(mapper.get(nei));
                }
            }
        }
        return mapper.get(node);
    }
}