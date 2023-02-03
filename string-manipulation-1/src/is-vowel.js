/* exported isVowel */

function isVowel(character) {
  if (character === 'I' || character === 'E') {
    return true;
  } else if (character === 'i' || character === 'e') {
    return true;
  } else if (character === 'O' || character === 'U') {
    return true;
  } else if (character === 'o' || character === 'u') {
    return true;
  } else if (character === 'a') {
    return true;
  } else if (character === 'A') {
    return true;
  } else {
    return false;
  }
}
