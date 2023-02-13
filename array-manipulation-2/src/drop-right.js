/* exported dropRight */

function dropRight(array, count) {
  var droppedRight = [];
  for (var i = 0; i < array.length - count; i++) {
    droppedRight.push(array[i]);
  }
  return droppedRight;
}
