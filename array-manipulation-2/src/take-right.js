/* exported takeRight */
function takeRight(array, count) {
  var right = [];
  var firstIndex = array.length - count;
  if (firstIndex < 0) {
    firstIndex = 0;
  }
  for (var i = firstIndex; i < array.length; i++) {
    right.push(array[i]);
  }
  return right;
}
