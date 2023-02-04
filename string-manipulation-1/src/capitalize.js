/* exported capitalize */

function capitalize(word) {
  var firstLetter = word.charAt(0).toUpperCase();
  var otherChar = word.slice(1).toLowerCase();
  return firstLetter + otherChar;

}
