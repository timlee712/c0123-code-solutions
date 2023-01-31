function convertMinutesToSeconds(minutes) {
  var seconds = 60;
  return minutes * seconds;
}
console.log('5 minutes is converted to', convertMinutesToSeconds(5), 'seconds.');

function greet(name) {
  return 'Hey, ' + name;
}
console.log('outcome of the function greet("Beavis"):', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('the area is:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('the first name is:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}
console.log('the last element of the array is:', getLastElement(['propane', 'and', 'propane', 'accessories']));
