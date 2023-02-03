/* exported countdown */
function countdown(number) {
  var count = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    count.push(currentNumber);
    currentNumber--;
  }
  return count;
}
