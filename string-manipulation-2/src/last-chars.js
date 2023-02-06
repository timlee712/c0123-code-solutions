/* exported lastChars */

function lastChars(length, string) {
  var firstIndex = string.length - length;
  if (firstIndex < 0) {
    firstIndex = 0;
  }
  return string.substring(firstIndex);
}
