/* exported oddOrEven */
function oddOrEven(numbers) {
  var isItOddOrEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      isItOddOrEven.push('even');
    } else {
      isItOddOrEven.push('odd');
    }
  }
  return isItOddOrEven;
}
