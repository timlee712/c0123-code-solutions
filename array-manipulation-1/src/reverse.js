/* exported reverse */
function reverse(array) {
  var reverseArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
}
