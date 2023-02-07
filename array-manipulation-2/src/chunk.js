/* exported chunk */

function chunk(array, size) {
  var chunky = [];
  for (var i = 0; i < array.length; i += size) {
    chunky.push(array.slice(i, i + size));
  }
  return chunky;
}
