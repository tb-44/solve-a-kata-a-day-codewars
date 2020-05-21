// Linked Lists - Shuffle Merge

// Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one list, taking nodes alternately between the two lists.So ShuffleMerge() with 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null.If either list runs out, all the nodes should be taken from the other list.ShuffleMerge() should return the new list.The solution depends on being able to move nodes to the end of a list.

// var first = 3 -> 2 -> 8 -> null
// var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
// shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null
// If one of the argument lists is null, the returned list should be the other linked list(even if it is also null).No errors need to be thrown in ShuffleMerge().

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  var first_arr = [];
  var second_arr = [];

  while (first) {
    first_arr.push(first.data);
    first = first.next;
  }
  while (second) {
    second_arr.push(second.data);
    second = second.next;
  }
  var third_arr = [];
  for (var i = 0; first_arr.length || second_arr.length; i++) {
    if (first_arr.length) {
      third_arr.push(first_arr.shift());
    }
    if (second_arr.length) {
      third_arr.push(second_arr.shift());
    }
  }
  const merge = (list, data) => {
    var new_node = new Node(data);
    new_node.next = list;
    return new_node;
  };
  var list = null;
  arr3.reverse().map((x) => (list = merge(list, x)));
  return list;
}
