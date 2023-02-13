/* exported pick */
object-manipulation-2
function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] !== undefined) {
      output[key] = source[key];
    }
  }
  return output;
=======

function pick(source, keys) {
  var picked = {};
  for (keys in source) {
    picked.push(keys);
  }
  return picked;
 main
}
