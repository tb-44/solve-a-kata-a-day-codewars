import java.util.Stack;

public class FlattenMultilevelDoubleLinkedList {
    public int val;
    public Node prev;
    public Node next;
    public Node child;

    public Node flatten(Node head) {
        Stack<Node> stack = new Stack<>();
        Node node = head, next = null;
        while (node != null) {

            if (node.child != null) {
                if (node.next != null) {
                    next = (Node) node.getNext();
                    next.prev = null;
                    stack.push(next);
                }
                node.next = node.child;
                next.prev = node;
                node.child = null;
            }

            if (node.next == null && stack.size() > 0) {
                next = stack.pop();
                node.next = next;
                next.prev = node;
            }
            node = (Node) node.next;
        }
        return head;
    }
}