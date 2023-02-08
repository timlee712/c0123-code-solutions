/* exported pick */

function pick(source, keys) {
  var picked = {};
  for (keys in source) {
    picked.push(keys);
  }
  return picked;
}
