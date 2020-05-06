// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form[F, F, F, T, T, T] where the Fs(resp.Ts) are items for which the predicate function returned false(resp.true).

//     NOTE: the partitioning should be stable; in other words: the ordering of the Fs(resp.Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index.In other words: the index of the first T value in items.

// For example:

// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) { return n % 2 == 0 }
// var i = partitionOn(isEven, items);
// // items should now be [1, 3, 5, 2, 4, 6]
// // i     should now be 3

function partitionOn(pred, items) {
  var partition = (pred, x) =>
    x.reduce(([x, y], i) => (!pred(i) ? [[...x, i], y] : [x, [...y, i]]), [
      [],
      [],
    ]);
  var [a, b] = partition(pred, items);
  var list = [...a, ...b];
  change(items, list);
  return a.length;
}

function change(x, y) {
  for (var i = 0; i < x.length; i++) {
    x[i] = y[i];
  }
}

// other
function partitionOn(pred, items) {
  var a = 0,
    b = 0;
  while (b++ < items.length)
    (pred(items[a]) && items.push(items.splice(a, 1)[0])) || a++;
  return a;
}
