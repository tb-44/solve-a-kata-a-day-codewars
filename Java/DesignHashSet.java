// Design a HashSet without using any built-in hash table libraries.
// To be specific, your design should include these functions:

// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

// Example:
// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);         
// hashSet.add(2);         
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);          
// hashSet.contains(2);    // returns true
// hashSet.remove(2);          
// hashSet.contains(2);    // returns false (already removed)

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class DesignHashSet {
    private List<LinkedList<Integer>> list;
    private int size = 13;

    public void MyHashSet() {
        list = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            list.add(new LinkedList<>());
        }
    }

    public void add(int key) {
        if (!contains(key))
            list.get(key % size).add(key);
    }

    public void remove(int key) {
        if (contains(key))
            list.get(key % size).removeFirstOccurrence(key);
    }

    public boolean contains(int key) {
        LinkedList<Integer> bucket = list.get(key % size);
        for (int num : bucket)
            if (num == key)
                return true;
        return false;
    }
}