/* exported capitalizeWord */

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    word = 'JavaScript';
  } else {
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return word;
}
