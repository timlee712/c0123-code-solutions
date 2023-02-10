/* exported omit */

function omit(source, keys) {
  var output = {};
  for (var key in source) {
    if (keys.indexOf(key) === -1) {
      output[key] = source[key];
    }
  }
  return output;
}
