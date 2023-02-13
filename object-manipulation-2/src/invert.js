/* exported invert */
object-manipulation-2

function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}
=======
main
