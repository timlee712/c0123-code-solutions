/* exported initial */

function initial(array) {
  var initialArr = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
