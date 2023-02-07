/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var characters = string.split('');
  var temporary = characters[firstIndex];
  characters[firstIndex] = characters[secondIndex];
  characters[secondIndex] = temporary;
  return characters.join('');
}
