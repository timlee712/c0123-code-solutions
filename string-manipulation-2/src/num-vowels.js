/* exported numVowels */

function numVowels(string) {
  var count = 0;
  var vowel = 'aeiouAEIOU';
  for (var i = 0; i < string.length; i++) {
    if (vowel.indexOf(string[i]) !== -1) {
      count++;
    }
  }
  return count;
}
