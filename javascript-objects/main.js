var student = {
  firstName: 'Timothy ',
  lastName: 'Lee',
  age: 20
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Jamba Juice employee';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Mitsubishi',
  model: 'Lancer',
  year: '2008'
};

vehicle['color'] = 'red';
console.log('value of vehicle["color"]:', vehicle['color']);
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Koya',
  type: 'Maltipoo'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
