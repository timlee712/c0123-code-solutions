function ExampleConstructor() {

}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('newConstructor:', newConstructor);

console.log('newConstructor instanceof ExampleConstructor:', newConstructor instanceof ExampleConstructor);
