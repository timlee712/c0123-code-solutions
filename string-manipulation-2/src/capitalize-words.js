/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalizedWords = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}
