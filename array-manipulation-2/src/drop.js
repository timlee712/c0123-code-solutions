/* exported drop */

function drop(array, count) {
  var dropped = [];
  for (var i = count; i < array.length; i++) {
    dropped.push(array[i]);
  }
  return dropped;
}
