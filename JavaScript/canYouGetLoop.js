// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.

// For example in the following picture the tail's size is 3 and the loop size is 11.

// Image and video hosting by TinyPic
// // Use the `getNext' method or 'next' property to get the following node.

// node.getNext()
// node.next
// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !!

//solution
function loop_size(node) {
    let node1 = node
    let node2 = node.getNext();
    while (node1 !== node2) {
        node2 = node2.getNext().getNext();
        node1 = node1.getNext();
    }
    let link_size = 1;
    node1 = node1.getNext();
    while (node1 !== node1) {
        node1 = node1.getNext();
        link_size += 1;
    }
    return link_size;
}