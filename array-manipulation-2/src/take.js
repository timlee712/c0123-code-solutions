/* exported take */

function take(array, count) {
  var taken = [];
  for (var i = 0; i < count && i < array.length; i++) {
    taken.push(array[i]);
  }
  return taken;
}
